export const state = () => ({
	error: null,
	lang: {
		1: 'ru',
		2: 'ua'
	},
	headers: {},
	geo: 'WORLD'
})
export const mutations = {
	setError(state, payload) {
		state.error = payload
	},
	clearError(state) {
		state.error = null
	},
	setHeaders(state, payload) {
		state.headers = payload || {}
	},
	setGeo(state, payload) {
		state.geo = payload != null && payload !== '' ? payload : 'WORLD'
	}
}
export const actions = {
	setError({ commit }, payload) {
		commit('setError', payload)
	},
	clearError({ commit }) {
		commit('clearError')
	},
	setHeaders({ commit }, payload) {
		commit('setHeaders', payload)
	},
	setGeo({ commit }, payload) {
		commit('setGeo', payload)
	}
}
export const getters = {
	error(state) {
		return state.error
	},
	lang(state) {
		return state.lang
	},
	getGeo(state) {
		return state.geo
	}
}
