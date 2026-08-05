import TRANSLATE from '~/translate'
import config from '~/config'
export default {
	data: () => {
		return {
			translates: TRANSLATE,
			config: config
		}
	},
	methods: {
		t(key){
			return key in this.translates ? this.translates[key][this.config.LANG] : '' 
		}
	}
}
