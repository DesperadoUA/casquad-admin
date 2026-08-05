import axios from 'axios'
import config from './config'

class DAL_Reviews {
	static storeReview(data) {
		return axios.post(`${config.API_URL}review/store`, data)
	}
	static getReviews(url) {
		return axios.get(`${config.API_URL}${url}`)
	}
}
export default DAL_Reviews
