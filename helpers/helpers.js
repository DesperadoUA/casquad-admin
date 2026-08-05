import config from '~/config'
import DAL_Options from '~/DAL/options'
import DAL_Settings from '~/DAL/settings'
export default class Helper {
	static refActivate(item) {
		if (item.ref.length !== 0) {
			const min = 0
			const max = item.ref.length - 1
			const random = Math.floor(Math.random() * (max - min + 1)) + min
			window.open(item.ref[random], '_blank')
		}
	}
	static getRef(item) {
		if (item.ref.length !== 0) {
			const min = 0
			const max = item.ref.length - 1
			const random = Math.floor(Math.random() * (max - min + 1)) + min
			return item.ref[random]
		}
	}
	static classRating(item) {
		if (item.rating <= 33) return '--cr-rating: #f00'
		if (item.rating > 33 && item.rating <= 67) return '--cr-rating: #ffc700'
		if (item.rating > 67) return '--cr-rating: #0f6'
	}
	static hreflang(arr) {
		let newArr = []
		const defaultItem = arr.filter(
			item => item.lang === config.DEFAULT_LANG[config.LANG]
		)
		if (defaultItem.length !== 0) {
			newArr = arr
				.map(item => {
					return {
						hreflang: item.lang,
						rel: 'alternate',
						href: item.link
					}
				})
				.concat([
					{
						hreflang: 'x-default',
						rel: 'alternate',
						href: defaultItem[0].link
					}
				])
		}
		return newArr
	}
	static headDataMixin(data, route) {
		data.body.currentUrl = route.path.startsWith(config.AMP_PREFIX)
			? config.BASE_URL[config.LANG] +
			  route.path.replace(`${config.AMP_PREFIX}`, '')
			: config.BASE_URL[config.LANG] + route.path
		return data
	}
	static optionsDataMixin(data, options) {
		data.body.options = {}
		options.forEach(el => (data.body.options[el.key] = el.value))
		return data
	}
	static settingsDataMixin(data, settings) {
		data.body.settings = {}
		settings.forEach(el => (data.body.settings[el.key] = el.value))
		return data
	}
	static async globalDataMixin(response, route) {
		const responseOptions = await DAL_Options.getOptions()
		const responseSettings = await DAL_Settings.getSettings()
		let data = this.headDataMixin(response.data, route)
		data = this.optionsDataMixin(data, responseOptions.data.body)
		data = this.settingsDataMixin(data, responseSettings.data.body)
		return data
	}
}
