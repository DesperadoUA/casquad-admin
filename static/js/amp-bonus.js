{
	const btn = document.querySelector('.loadMoreBtn')
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetApiUrl = btn.attributes.filter(
			item => item.name === 'data-apiurl'
		)
		const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

		const dataSetPostsOnQuery = btn.attributes.filter(
			item => item.name === 'data-postsonquery'
		)
		const postsOnQuery = dataSetPostsOnQuery.length
			? dataSetPostsOnQuery[0].value
			: 20

		const dataSetAmpPrefix = btn.attributes.filter(
			item => item.name === 'data-ampprefix'
		)
		const ampPrefix = dataSetAmpPrefix.length
			? dataSetAmpPrefix[0].value
			: '/amp'

		const dataSetPostType = btn.attributes.filter(
			item => item.name === 'data-post-type'
		)
		const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

		const dataSetPostUrl = btn.attributes.filter(
			item => item.name === 'data-post-url'
		)
		const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

		const dataSetReadMore = btn.attributes.filter(
			item => item.name === 'data-translate-read-more'
		)
		const readMore = dataSetReadMore.length ? dataSetReadMore[0].value : ''

		const dataSetGetBonus = btn.attributes.filter(
			item => item.name === 'data-translate-get-bonus'
		)
		const getBonus = dataSetGetBonus.length ? dataSetGetBonus[0].value : ''

		const dataSetBonusInvalid = btn.attributes.filter(
			item => item.name === 'data-translate-bonus-invalid'
		)
		const bonusInvalid = dataSetBonusInvalid.length
			? dataSetBonusInvalid[0].value
			: ''

		function renderTemplate(posts, counter) {
			const length =
				(counter + 1) * postsOnQuery > posts.length
					? posts.length
					: (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += `<article class="bonuses-item">
                                    <div class="bonuses-item__logo">
                                        <a href="${ampPrefix}${posts[i].permalink}">
                                            <amp-img src="${posts[i].casino.thumbnail}" alt="${posts[i].title}" width="146" height="95" />
                                        </a>
                                    </div>
                                    <div class="bonuses-item__name">
                                        <a href="${ampPrefix}${posts[i].permalink}">
                                            ${posts[i].title}
                                        </a>
                                    </div>
                                    <div class="bonuses-item__val">${posts[i].value}</div>
                                    <div class="bonuses-tags">`
				posts[i].type_bonus.forEach(item_cat => {
					html += `<a class="bonuses-tag" href="${ampPrefix}${item_cat.permalink}">
                            ${item_cat.title}
                        </a>`
				})
				html += `</div>
                                    <div class="bonuses-item__btns">
                                        <a href="${ampPrefix}${posts[i].permalink}" class="hidden-sm bonuses-item__btn btn-secondary">
                                            ${readMore}
                                        </a>`
				if (posts[i].close === 0) {
					html += `<a href="${getRef(
						posts[i]
					)}" class="bonuses-item__btn btn-primary">
                            ${getBonus}
                        </a>`
				} else {
					html += `<span class="bonuses-item__btn fake-btn-secondary">${bonusInvalid}</span>`
				}
				html += `</div>
                        </article>`
			}
			loadContainer.innerHTML += html
		}
		function isShowBtn(posts, counter) {
			return (counter + 1) * postsOnQuery < posts.length
		}
		function getRef(item) {
			if (item.ref.length !== 0) {
				const min = 0
				const max = item.ref.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				return item.ref[random]
			} else {
				return '#'
			}
		}
		btn.addEventListener('click', () => {
			if (counter === 0) {
				btn.disabled = true
				fetch(apiUrl, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({ postType, postUrl })
				})
					.then(response => response.json())
					.then(data => {
						btn.disabled = false
						counter++
						posts = data.body.posts
						renderTemplate(posts, counter)
						if (!isShowBtn(posts, counter)) btn.remove()
					})
			} else {
				counter++
				renderTemplate(posts, counter)
				if (!isShowBtn(posts, counter)) btn.remove()
			}
		})
	}
}
/*
    pages: ['bonuses']
    postTypes: ['type-bonus'] 
 */
