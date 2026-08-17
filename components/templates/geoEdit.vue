<template>
	<div>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
					<v-expansion-panels inset>
						<v-expansion-panel>
							<v-expansion-panel-header>GEO</v-expansion-panel-header>
							<v-expansion-panel-content class="pt-4">
								<v-row>
									<v-col v-for="item in geoItems" :key="item.key" cols="2" class="geo-item">
										<img :src="item.img" width="32" height="28" :alt="item.name" :title="item.name" />
										<div class="geo-name white--text">{{ item.name }}</div>
										<v-sheet class="geo-switch">
											<v-switch
												color="deep-orange darken-2"
												v-model="switches[item.key]"
												inset
												hide-details
												@change="change(item.key)"
											/>
										</v-sheet>
									</v-col>
								</v-row>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import global from '~/mixins/global'
import config from '~/config'
export default {
	name: 'geoEdit',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		const geoItems = [
			{ key: 'geo_GB', code: 'GB', img: '/img/GB.webp' },
			{ key: 'geo_AU', code: 'AU', img: '/img/AU.webp' },
			{ key: 'geo_CA', code: 'CA', img: '/img/CA.webp' },
			{ key: 'geo_NL', code: 'NL', img: '/img/NL.webp' },
			{ key: 'geo_DE', code: 'DE', img: '/img/DE.webp' },
			{ key: 'geo_PH', code: 'PH', img: '/img/PH.webp' },
			{ key: 'geo_IT', code: 'IT', img: '/img/Italy.webp' },
			{ key: 'geo_NZ', code: 'NZ', img: '/img/NZ.webp' },
			{ key: 'geo_CH', code: 'CH', img: '/img/CH.webp' },
			{ key: 'geo_GR', code: 'GR', img: '/img/GR.webp' },
			{ key: 'geo_ZA', code: 'ZA', img: '/img/ZA.webp' },
			{ key: 'geo_FI', code: 'FI', img: '/img/Finland.webp' },
			{ key: 'geo_SE', code: 'SE', img: '/img/Sweden.webp' },
			{ key: 'geo_MY', code: 'MY', img: '/img/Malaysia.webp' },
			{ key: 'geo_HU', code: 'HU', img: '/img/Hungary.webp' },
			{ key: 'geo_FR', code: 'FR', img: '/img/France.webp' },
			{ key: 'geo_ID', code: 'ID', img: '/img/ID.webp' },
			{ key: 'geo_HR', code: 'HR', img: '/img/Croatia.webp' },
			{ key: 'geo_IN', code: 'IN', img: '/img/IN.webp' },
			{ key: 'geo_AT', code: 'AT', img: '/img/Austria.webp' },
			{ key: 'geo_BE', code: 'BE', img: '/img/Belgium.webp' },
			{ key: 'geo_PL', code: 'PL', img: '/img/Poland.webp' },
			{ key: 'geo_PT', code: 'PT', img: '/img/Portugal.webp' },
			{ key: 'geo_ES', code: 'ES', img: '/img/Spain.webp' },
			{ key: 'geo_RO', code: 'RO', img: '/img/Romania.webp' },
			{ key: 'geo_NO', code: 'NO', img: '/img/Norway.webp' },
			{ key: 'geo_BR', code: 'BR', img: '/img/Brazil.webp' },
			{ key: 'geo_CZ', code: 'CZ', img: '/img/CZ.webp' }
		].map((item) => ({
			...item,
			name: config.GEO_NAMES[item.code] || item.code
		}))
		const switches = {}
		geoItems.forEach((item) => {
			switches[item.key] = false
		})
		return { geoItems, switches }
	},
	mounted() {
		this.geoItems.forEach((item) => {
			this.switches[item.key] = !!this.data[item.key]
		})
	},
	methods: {
		change(key) {
			this.$store.dispatch(this.action, {
				key,
				value: this.switches[key]
			})
		}
	}
}
</script>
<style scoped>
.geo-item {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.geo-name {
	font-size: 11px;
	line-height: 1.2;
	margin: 4px 0 2px;
	min-height: 28px;
}
.geo-switch {
	display: flex;
	justify-content: center;
	background: transparent !important;
}
.geo-switch >>> .v-input {
	margin: 0;
	padding: 0;
	flex: none;
}
.geo-switch >>> .v-input__slot {
	margin: 0;
	justify-content: center;
}
</style>
