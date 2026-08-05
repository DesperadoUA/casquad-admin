export default {
	data() {
        return {
            postCurrentPage: 1
        }
    },
    computed: {
		currentPosts() {
			return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		},
        hideBtnShowMore() {
            return this.value.length > this.numberPostOnQuery * this.postCurrentPage
        }
	},
    methods: {
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}