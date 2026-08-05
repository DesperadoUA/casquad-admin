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

		const dataSetGoTo = btn.attributes.filter(
			item => item.name === 'data-translate-go-to'
		)
		const goTo = dataSetGoTo.length ? dataSetGoTo[0].value : ''

		const dataSetClose = btn.attributes.filter(
			item => item.name === 'data-translate-close'
		)
		const close = dataSetClose.length ? dataSetClose[0].value : ''

		function renderTemplate(posts, counter) {
			const length =
				(counter + 1) * postsOnQuery > posts.length
					? posts.length
					: (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += ` <article class="slot-item">
                     <div class="slot-item__logo">
                         <a href="${ampPrefix}${posts[i].permalink}">
                             <amp-img src="${posts[i].thumbnail}" width="214" height="138" alt="" />
                         </a>
                     </div>
                     <div class="slot-item__content">
                         <div class="slot-item__name">
                             <a href="${ampPrefix}${posts[i].permalink}">
                                ${posts[i].title}
                             </a>`
				if (posts[i].licenses.length)
					html += `<amp-img src="/img/check.svg" width="30" height="15" />`
				html += `</div>
                         <div class="slot-item__stats">
                             <div class="star-rating">
                                 <span class="star-rating__val" style="width: ${
																		posts[i].rating
																	}%"></span>
                             </div>
                                 <strong class="slot-item__stats-val">${
																		posts[i].rating
																	}/100</strong>
                         </div>
                     </div>
                     <div class="slot-item__btns">
                         <a class="slot-item__btn --blue" href="${getRef(
														posts[i]
													)}">${goTo}</a>
                     </div>`
				if (posts[i].close)
					html += `<span class="ribbon-closed">${close}</span>`
				html += `</article>`
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
    pages: ['casino_good']
    postTypes: ['lang', 'country', 'license', 'payment', 'technology', 'vendor']
 */
