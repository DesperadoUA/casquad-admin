import { redirects } from './storeRedirects.js'

module.exports = function(req, res, next) {
	const host = req.headers.host
	const fullUrl = req.url
	let url = req.url.split('?')[0]
	let urlParams = null
	if (host.startsWith('www.')) {
		const to = 'https://casquad.org' + req.url
		res.writeHead(301, { Location: to })
		res.end()
		return
	}
	if (req.url.includes('?')) {
		urlParams = '?' + req.url.split('?')[1]
	}

	const redirect = redirects.find(r => r.from === url)
	if (redirect) {
		let newLocation
		if (urlParams) {
			newLocation = redirect.to + urlParams
		} else {
			newLocation = redirect.to
		}
		res.writeHead(301, {
			Location: newLocation
		})
		res.end()
	} else {
		next()
	}
}