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
									<v-col cols="1">
										<img src="/img/GB.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_GB"
												inset
												@change="change('geo_GB')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/AU.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_AU"
												inset
												@change="change('geo_AU')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/CA.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_CA"
												inset
												@change="change('geo_CA')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/NL.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_NL"
												inset
												@change="change('geo_NL')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/DE.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_DE"
												inset
												@change="change('geo_DE')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/PH.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_PH"
												inset
												@change="change('geo_PH')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Italy.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_IT"
												inset
												@change="change('geo_IT')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/NZ.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_NZ"
												inset
												@change="change('geo_NZ')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/CH.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_CH"
												inset
												@change="change('geo_CH')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/GR.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_GR"
												inset
												@change="change('geo_GR')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/ZA.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_ZA"
												inset
												@change="change('geo_ZA')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Finland.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_FI"
												inset
												@change="change('geo_FI')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Sweden.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_SE"
												inset
												@change="change('geo_SE')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Malaysia.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_MY"
												inset
												@change="change('geo_MY')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Hungary.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_HU"
												inset
												@change="change('geo_HU')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/France.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_FR"
												inset
												@change="change('geo_FR')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/ID.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_ID"
												inset
												@change="change('geo_ID')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Croatia.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_HR"
												inset
												@change="change('geo_HR')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/IN.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_IN"
												inset
												@change="change('geo_IN')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Austria.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_AT"
												inset
												@change="change('geo_AT')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Belgium.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_BE"
												inset
												@change="change('geo_BE')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Poland.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_PL"
												inset
												@change="change('geo_PL')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Portugal.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_PT"
												inset
												@change="change('geo_PT')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Romania.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_RO"
												inset
												@change="change('geo_RO')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Norway.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_NO"
												inset
												@change="change('geo_NO')"
											></v-switch>
										</v-sheet>
									</v-col>
									<v-col cols="1">
										<img src="/img/Brazil.webp" width="32" height="28" />
										<v-sheet>
											<v-switch
												color="deep-orange darken-2"
												v-model="geo_BR"
												inset
												@change="change('geo_BR')"
											></v-switch>
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
export default {
	name: 'geoEdit',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			geo_GB: false,
			geo_BD: false,
			geo_AU: false,
			geo_GR: false,
			geo_IN: false,
			geo_ID: false,
			geo_CA: false,
			geo_NL: false,
			geo_DE: false,
			geo_ZA: false,
			geo_PH: false,
			geo_SE: false,
			geo_IT: false,
			geo_NZ: false,
			geo_CH: false,
			geo_FI: false,
			geo_MY: false,
			geo_HU: false,
			geo_FR: false,
			geo_HR: false,
			geo_AT: false,
			geo_BE: false,
			geo_PL: false,
			geo_PT: false,
			geo_RO: false,
			geo_NO: false,
			geo_BR: false,
			geo_CZ: false
		}
	},
	mounted() {
		this.geo_GB = !!this.data.geo_GB
		this.geo_BD = !!this.data.geo_BD
		this.geo_AU = !!this.data.geo_AU
		this.geo_GR = !!this.data.geo_GR
		this.geo_IN = !!this.data.geo_IN
		this.geo_ID = !!this.data.geo_ID
		this.geo_CA = !!this.data.geo_CA
		this.geo_NL = !!this.data.geo_NL
		this.geo_DE = !!this.data.geo_DE
		this.geo_ZA = !!this.data.geo_ZA
		this.geo_PH = !!this.data.geo_PH
		this.geo_SE = !!this.data.geo_SE
		this.geo_IT = !!this.data.geo_IT
		this.geo_NZ = !!this.data.geo_NZ
		this.geo_CH = !!this.data.geo_CH
		this.geo_FI = !!this.data.geo_FI
		this.geo_MY = !!this.data.geo_MY
		this.geo_HU = !!this.data.geo_HU
		this.geo_FR = !!this.data.geo_FR
		this.geo_HR = !!this.data.geo_HR
		this.geo_AT = !!this.data.geo_AT
		this.geo_BE = !!this.data.geo_BE
		this.geo_PL = !!this.data.geo_PL
		this.geo_PT = !!this.data.geo_PT
		this.geo_RO = !!this.data.geo_RO
		this.geo_NO = !!this.data.geo_NO
		this.geo_BR = !!this.data.geo_BR
		this.geo_CZ = !!this.data.geo_CZ
	},
	methods: {
		change(key) {
			const currenData = {
				key: key,
				value: this[key]
			}
			this.$store.dispatch(this.action, currenData)
		}
	}
}
</script>
