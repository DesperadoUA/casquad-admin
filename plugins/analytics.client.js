let __analyticsInitialized = false

function normalizeUrl(url) {
	try {
		if (!url) return ''
		let cleaned = decodeURIComponent(url)
		cleaned = cleaned.replace(/^https?:\/\//i, '').replace(/^www\./i, '')
		cleaned = cleaned.trim().replace(/\/+$/, '')
		return cleaned
	} catch (err) {
		console.warn('[normalizeUrl] Failed to normalize url:', err)
		return url
	}
}

// 🔹 Получаем источник и сразу нормализуем
function getReferrerSource(refParam) {
	try {
		let source = 'direct'

		if (refParam) {
			source = refParam
		} else if (document.referrer) {
			source = document.referrer
		}

		return source === 'direct' ? 'direct' : normalizeUrl(source)
	} catch (err) {
		console.warn('[analytics] Failed to determine referrer source:', err)
		return 'direct'
	}
}

export default ({ store }) => {
	if (!process.client || __analyticsInitialized) return
	__analyticsInitialized = true

	try {
		const params = new URLSearchParams(window.location.search)
		const refParam = params.get('referrer')

		const savedData = JSON.parse(localStorage.getItem('analytics') || '{}')

		const analyticsData = {
			first_source: savedData.first_source || null,
			referrer: 'direct',
			...savedData
		}

		if (!analyticsData.first_source) {
			analyticsData.first_source = getReferrerSource(refParam)
		}

		analyticsData.referrer = getReferrerSource(refParam)

		localStorage.setItem('analytics', JSON.stringify(analyticsData))
		store.dispatch('analytics/initAnalytics', analyticsData)
	} catch (err) {
		console.warn('[analytics] Failed to initialize analytics:', err)
	}
}
