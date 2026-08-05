import DAL_Pages from '../DAL/pages'

function normalizePageMeta(pageMeta = {}) {
	return {
		casino_ref: [],
		pros: [],
		cons: [],
		pros_cons_title: '',
		pros_title: '',
		cons_title: '',
		...pageMeta
	}
}

/** meta из API → плоские поля на data (как casino) */
function flattenPageMeta(data) {
	const page_meta = normalizePageMeta(data.page_meta)
	return {
		...data,
		casino_ref: page_meta.casino_ref,
		pros: page_meta.pros,
		cons: page_meta.cons,
		pros_cons_title: page_meta.pros_cons_title,
		pros_title: page_meta.pros_title,
		cons_title: page_meta.cons_title
	}
}

/** плоские поля → page_meta для API */
function packPageMeta(data) {
	return {
		...data,
		page_meta: {
			casino_ref: data.casino_ref || [],
			pros: data.pros || [],
			cons: data.cons || [],
			pros_cons_title: data.pros_cons_title || '',
			pros_title: data.pros_title || '',
			cons_title: data.cons_title || ''
		}
	}
}

export const state = () => ({
	pages: {
		currentPage: {},
		list: {
			ru: [],
			ua: []
		},
		page: {
			ru: 1,
			ua: 1
		},
		total: {
			ru: 0,
			ua: 0
		},
		newPost: {},
		insert_id: ''
	}
})
export const mutations = {
	setPages(state, data) {
		state.pages.list[data.lang] = data.body
		state.pages.total[data.lang] = data.total
	},
	setCurrentPage(state, data) {
		state.pages.currentPage = flattenPageMeta(data)
	},
	changeStateCurrentPage(state, data) {
		state.pages.currentPage[data.key] = data.value
	},
	changeStateNewPost(state, data) {
		state.pages.newPost[data.key] = data.value
	},
	setNewPost(state, data) {
		state.pages.newPost = flattenPageMeta(data)
	},
	setInsert(state, data) {
		state.pages.insert_id = data
	},
	setPaginationPage(state, data) {
		state.pages.page[data.lang] = data.page
	}
}
export const actions = {
	async setPages({ commit }, data) {
		const result = await DAL_Pages.getPages(data)
		if (result.data.confirm === 'ok') commit('setPages', result.data)
	},
	async setCurrentPage({ commit }, data) {
		const result = await DAL_Pages.getPageById(data)
		if (result.data.confirm === 'ok') commit('setCurrentPage', result.data.body)
	},
	changeStateCurrentPage({ commit }, data) {
		commit('changeStateCurrentPage', data)
	},
	changeStateNewPost({ commit }, data) {
		commit('changeStateNewPost', data)
	},
	setNewPost({ commit }, data) {
		commit('setNewPost', data)
	},
	async setPaginationPage({ commit }, data) {
		const result = await DAL_Pages.getPages(data)
		const pageData = {
			lang: data.lang === 1 ? 'ru' : 'ua',
			page: data.offset / data.limit + 1
		}
		if (result.data.confirm === 'ok') {
			commit('setPages', result.data)
			commit('setPaginationPage', pageData)
		}
	},
	async updateCurrentPage({ commit }, data) {
		const payload = {
			...data,
			data: packPageMeta(data.data)
		}
		await DAL_Pages.updatePage(payload)
	},
	async addNewPost({ commit }, data) {
		commit('setInsert', '')
		const payload = {
			...data,
			data: packPageMeta(data.data)
		}
		const result = await DAL_Pages.storePage(payload)
		if (result.data.confirm === 'ok') {
			commit('setInsert', result.data.insert_id)
		}
	}
}
export const getters = {
	getPages(state) {
		return state.pages.list
	},
	getCurrentPage(state) {
		return state.pages.currentPage
	},
	getPage(state) {
		return state.pages.page
	},
	getTotal(state) {
		return state.pages.total
	},
	getNewPost(state) {
		return state.pages.newPost
	},
	getInsertId(state) {
		return state.pages.insert_id
	}
}
