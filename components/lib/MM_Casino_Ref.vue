<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>Casino Ref Override</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4">
							<div v-if="!casinoList.length" class="text-caption grey--text py-2">
								Нет привязанных казино
							</div>
							<template v-else>
								<div v-for="casino in casinoList" :key="casino.id" class="casino-ref-block mb-6">
									<div class="text-subtitle-2 white--text mb-2">
										{{ casino.title }}
										<span class="text-caption grey--text ml-2">id: {{ casino.id }}</span>
									</div>
									<v-row
										v-for="(row, index) in localRefs[casino.id] || []"
										:key="index"
										class="bb_orange"
									>
										<v-col class="col-4">
											<v-select
												color="deep-orange darken-2"
												:items="geoItems"
												item-text="text"
												item-value="value"
												v-model="localRefs[casino.id][index].value_2"
												label="GEO"
												@change="sync"
											/>
										</v-col>
										<v-col class="col-6">
											<v-text-field
												prepend-icon="mdi-link"
												type="text"
												color="deep-orange darken-2"
												v-model="localRefs[casino.id][index].value_1"
												label="URL"
												@change="sync"
											/>
										</v-col>
										<v-col class="col-2 d-flex align-center">
											<v-btn class="deep-orange darken-2" @click="deleteRow(casino.id, index)">
												<v-icon>mdi-delete</v-icon>
											</v-btn>
										</v-col>
									</v-row>
									<v-btn class="deep-orange darken-2 mt-5" @click="addRow(casino.id)">
										<v-icon left>mdi-playlist-plus</v-icon>
										Add GEO
									</v-btn>
									<v-divider class="mt-4 mb-2" />
								</div>
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

export default {
	name: 'MM_Casino_Ref',
	props: ['casinoList', 'casinoRef', 'action'],
	data() {
		return {
			geoItems: (config.GEO || []).map((code) => ({
				value: code,
				text: config.GEO_NAMES && config.GEO_NAMES[code] ? `${config.GEO_NAMES[code]} (${code})` : code
			})),
			localRefs: {},
			_syncing: false
		}
	},
	mounted() {
		this.buildLocalRefs()
	},
	watch: {
		casinoList() {
			this.buildLocalRefs()
		},
		casinoRef() {
			if (!this._syncing) this.buildLocalRefs()
		}
	},
	methods: {
		buildLocalRefs() {
			const map = {}
			for (const casino of this.casinoList || []) {
				const existing = (this.casinoRef || []).find((r) => r.casino_id === casino.id)
				map[casino.id] = existing ? existing.ref.map((r) => ({ ...r })) : []
			}
			this.localRefs = map
		},
		addRow(casinoId) {
			if (!this.localRefs[casinoId]) {
				this.$set(this.localRefs, casinoId, [])
			}
			this.$set(this.localRefs, casinoId, [...this.localRefs[casinoId], { value_1: '', value_2: 'WORLD' }])
		},
		deleteRow(casinoId, index) {
			this.localRefs[casinoId].splice(index, 1)
			this.sync()
		},
		sync() {
			this._syncing = true
			const casinoRef = []
			for (const casino of this.casinoList || []) {
				const rows = (this.localRefs[casino.id] || []).filter((r) => r.value_1.trim() !== '')
				if (rows.length) {
					casinoRef.push({ casino_id: casino.id, ref: rows })
				}
			}
			this.$store.dispatch(this.action, {
				key: 'casino_ref',
				value: casinoRef
			})
			this.$nextTick(() => {
				this._syncing = false
			})
		}
	}
}
</script>

<style scoped>
.bb_orange {
	border-bottom: 1px solid #ff3d00;
}
.casino-ref-block {
	border-left: 2px solid rgba(255, 61, 0, 0.4);
	padding-left: 12px;
}
</style>
