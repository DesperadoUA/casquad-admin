export const state = () => ({
	analytics: null
})
export const mutations = {
	setAnalytics(state, data) {
		state.analytics = data
	}
}
export const actions = {
	initAnalytics({ commit }, data) {
		commit('setAnalytics', data)
	}
}
export const getters = {
	getAnalytics(state) {
		return state.analytics
	}
}
