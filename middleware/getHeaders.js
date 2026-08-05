export default async ({ req, store }) => {
	if (process.server) {
		store.dispatch('common/setHeaders', req.headers)
		store.dispatch('common/setGeo', req.headers['geoip-country-code'])
	}
}
