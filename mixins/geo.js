export default {
	data: () => {
		return {
			geoConfig: {
				WORLD: 'W',
				GB: 'GB',
				BD: 'BD',
				AU: 'AU',
				GR: 'GR',
				IN: 'IN',
				ID: 'ID',
				CA: 'CA',
				NL: 'NL',
				DE: 'DE',
				ZA: 'ZA',
				PH: 'PH',
				SE: 'SE',
				IT: 'IT',
				NZ: 'NZ',
				CH: 'CH',
				FI: 'FI',
				MY: 'MY',
				HU: 'HU',
				FR: 'FR',
				HR: 'HR',
				AT: 'AT',
				BE: 'BE',
				PL: 'PL',
				PT: 'PT',
				ES: 'ES',
				RO: 'RO',
				NO: 'NO',
				BR: 'BR',
				CZ: 'CZ'
			}
		}
	},
	computed: {
		geo() {
			return this.$store.getters['common/getGeo']
		}
	},
	methods: {
		setGeo(geo) {
			this.$store.dispatch('common/setGeo', geo)
			this.isShowLangSelector = false
		}
	}
}
