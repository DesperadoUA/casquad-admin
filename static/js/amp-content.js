{
	const main = document.querySelector('.cms')
	const menu = main.querySelector('.nav')
	let init = false
	main.addEventListener('click', () => {
		if (!init && menu) {
			init = true
			const dataSetContent = main.attributes.filter(
				item => item.name === 'data-translate-content'
			)
			const content = dataSetContent.length ? dataSetContent[0].value : ''
			const arrH = []
			const h2 = main.querySelectorAll('h2')
			h2.forEach(item => {
				arrH.push(item)
			})
			const h3 = main.querySelectorAll('h3')
			h3.forEach(item => {
				arrH.push(item)
			})
			const h4 = main.querySelectorAll('h4')
			h4.forEach(item => {
				arrH.push(item)
			})
			const h5 = main.querySelectorAll('h5')
			h5.forEach(item => {
				arrH.push(item)
			})
			const h6 = main.querySelectorAll('h6')
			h6.forEach(item => {
				arrH.push(item)
			})
			let str =
				`<div class="article_menu_heading">${content}</div>` +
				'<ol class="article_menu">'
			if (arrH.length === 0) {
				menu.remove()
			} else {
				arrH.forEach((item, index) => {
					str += `<li><b>${index + 1}.</b>
                                <a href="#heading_${index}">
                                    ${item.innerHTML}
                                </a>
                            </li>`
				})
				str += '</ol>'
				menu.innerHTML = str
				arrH.forEach((item, index) => {
					item.setAttribute('id', `heading_${index}`)
				})
			}
			menu.classList.add('fadeIn')
		}
	})
}
