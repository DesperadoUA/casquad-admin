export default {
	props: {
		refLinks: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		refActivate(arr, geo, component = '') {
			if (arr[geo]) {
				const url = new URL(arr[geo])
				const currentUrl = window.location.href
				const { first_source, referrer } = this.$store.getters['analytics/getAnalytics']
				url.searchParams.set('page_path', currentUrl)
				url.searchParams.set('element_id', component)
				url.searchParams.set('first_source', first_source)
				url.searchParams.set('referrer', referrer)
				window.open(url.toString(), '_blank')
			}
		}
	}
}
