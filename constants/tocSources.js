function contentN(from, to) {
	const keys = ['content']
	for (let i = from; i <= to; i++) {
		keys.push('content_' + i)
	}
	return keys
}

/** Доступные ключи контента для TOC multi-select по типу сущности */
export const TOC_SOURCES = {
	default: ['content'],
	category: ['content'],
	page: contentN(1, 15),
	casino: ['content', 'content_analysis', 'content_bonuses', 'content_reviews', 'content_games'],
	article: contentN(1, 10),
	funnel: contentN(1, 10),
	game: ['content', 'video_text', 'bonuses_text', 'games_text', 'rtp_description'],
	author: ['content', 'about', 'articles_overview'],
	bonus: ['content'],
	news: ['content'],
	vendor: ['content'],
	payment: ['content'],
	currency: ['content'],
	language: ['content']
}

export default TOC_SOURCES
