<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4">
							<v-progress-linear
								v-if="loading"
								indeterminate
								color="deep-orange darken-2"
								class="mb-4"
							/>
							<v-alert v-else-if="loadError" type="error" dense class="mb-4">
								{{ loadError }}
							</v-alert>
							<template v-else>
								<div class="text-caption grey--text mb-3">
									Казино: {{ allCasinos.length }}. Порядок сохраняется кнопкой Update на странице.
								</div>
								<v-tabs v-model="tab" background-color="dark" dark color="white">
									<v-tab
										v-for="geoCode in geoList"
										:key="geoCode"
										:href="'#geo-tab-' + geoCode"
									>
										{{ geoCode }}
										<span class="ml-1">({{ (lists[geoCode] || []).length }})</span>
									</v-tab>
								</v-tabs>
								<v-tabs-items v-model="tab" class="mt-4">
									<v-tab-item
										v-for="geoCode in geoList"
										:key="geoCode"
										:value="'geo-tab-' + geoCode"
									>
										<div v-if="!(lists[geoCode] || []).length" class="text-caption grey--text py-2">
											Нет казино для этого GEO
										</div>
										<div
											v-for="(item, index) in lists[geoCode] || []"
											:key="item.id"
											class="dnd-row"
											:class="{
												'is-dragging':
													dragged && draggedGeo === geoCode && draggedIndex === index
											}"
											draggable="true"
											@dragstart="onDragStart(geoCode, index, $event)"
											@dragover.prevent
											@drop="onDrop(geoCode, index, $event)"
										>
											<v-icon class="mr-2" color="deep-orange darken-2">mdi-drag</v-icon>
											<div class="flex-grow-1">
												<div class="font-weight-bold white--text">
													{{ index + 1 }}. {{ item.title }}
												</div>
												<div class="text-caption grey--text">id: {{ item.id }}</div>
											</div>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</template>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import config from '~/config'
import DAL_Builder from '~/DAL/builder'

function parseOrderValue(value) {
	if (!value) {
		return {}
	}
	if (typeof value === 'string') {
		try {
			return JSON.parse(value) || {}
		} catch (e) {
			return {}
		}
	}
	if (typeof value === 'object' && !Array.isArray(value)) {
		return value
	}
	return {}
}

function isCasinoForGeo(casino, geoCode) {
	if (geoCode === 'WORLD') {
		return true
	}
	const key = `geo_${geoCode}`
	if (Object.prototype.hasOwnProperty.call(casino, key)) {
		return !!casino[key]
	}
	return true
}

function applyOrder(casinos, orderIds) {
	const byId = {}
	casinos.forEach((casino) => {
		byId[casino.id] = casino
		byId[String(casino.id)] = casino
	})

	const ordered = []
	const seen = new Set()

	for (const rawId of orderIds || []) {
		const item = byId[rawId] ?? byId[Number(rawId)]
		if (item && !seen.has(item.id)) {
			ordered.push(item)
			seen.add(item.id)
		}
	}

	for (const casino of casinos) {
		if (!seen.has(casino.id)) {
			ordered.push(casino)
		}
	}

	return ordered
}

export default {
	name: 'MM_Casino_Geo_Order',
	props: ['value', 'title', 'action', 'action_key'],
	data() {
		return {
			geoList: config.GEO,
			tab: 'geo-tab-WORLD',
			allCasinos: [],
			lists: {},
			loading: true,
			loadError: '',
			dragged: false,
			draggedGeo: null,
			draggedIndex: null
		}
	},
	watch: {
		value() {
			if (!this.loading && this.allCasinos.length) {
				this.buildLists()
			}
		}
	},
	async mounted() {
		try {
			this.allCasinos = await this.fetchAllCasinos()
			this.buildLists()
		} catch (e) {
			this.loadError = 'Не удалось загрузить список казино'
		} finally {
			this.loading = false
		}
	},
	methods: {
		async fetchAllCasinos() {
			const user = this.$store.getters['user/getUser']
			if (!user || !user.session) {
				throw new Error('not auth')
			}

			const limit = 100
			let offset = 0
			let total = 0
			const all = []

			do {
				const request = new DAL_Builder()
				const result = await request
					.setDirection('casinos')
					.setData({
						session: user.session,
						id: user.id,
						lang: 1,
						limit,
						offset
					})
					.get()

				if (result.data.confirm !== 'ok') {
					break
				}

				const chunk = result.data.body || []
				total = result.data.total || chunk.length
				all.push(...chunk)
				offset += limit

				if (!chunk.length) {
					break
				}
			} while (all.length < total)

			return all
		},
		buildLists() {
			const savedOrder = parseOrderValue(this.value)

			for (const geoCode of this.geoList) {
				const filtered = this.allCasinos.filter((casino) => isCasinoForGeo(casino, geoCode))
				const orderIds = savedOrder[geoCode] || []
				this.$set(this.lists, geoCode, applyOrder(filtered, orderIds))
			}
		},
		syncToStore() {
			const payload = {}
			for (const geoCode of this.geoList) {
				payload[geoCode] = (this.lists[geoCode] || [])
					.map((item) => Number(item.id))
					.filter((id) => !Number.isNaN(id))
			}
			this.$store.dispatch(this.action, {
				key: this.action_key,
				value: payload
			})
		},
		onDragStart(geoCode, index, event) {
			this.dragged = true
			this.draggedGeo = geoCode
			this.draggedIndex = index
			event.dataTransfer.effectAllowed = 'move'
			event.dataTransfer.setData('text/plain', `${geoCode}:${index}`)
		},
		onDrop(geoCode, dropIndex, event) {
			event.preventDefault()
			if (!this.dragged || this.draggedGeo !== geoCode) {
				return
			}

			const list = this.lists[geoCode]
			const fromIndex = this.draggedIndex

			if (fromIndex === dropIndex) {
				this.resetDrag()
				return
			}

			const [moved] = list.splice(fromIndex, 1)
			list.splice(dropIndex, 0, moved)
			this.resetDrag()
			this.syncToStore()
		},
		resetDrag() {
			this.dragged = false
			this.draggedGeo = null
			this.draggedIndex = null
		}
	}
}
</script>

<style scoped>
.dnd-row {
	display: flex;
	align-items: center;
	padding: 10px 12px;
	margin-bottom: 8px;
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: rgba(0, 0, 0, 0.2);
	cursor: grab;
	user-select: none;
}

.dnd-row.is-dragging {
	opacity: 0.6;
}
</style>
