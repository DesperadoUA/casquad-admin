<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
				<MM_Order_Components
					:value="listComponents(data.order_components)"
					:action="action"
					title="Order Components"
					action_key="order_components"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
import config from '@/config.js'

export default {
	name: 'articleMeta',
	props: ['data', 'action'],
	mixins: [global],
	methods: {
		listComponents(list) {
			const data = {}
			for (const key in config.BLOG_TEMPLATE_COMPONENTS) {
				if (config.BLOG_TEMPLATE_COMPONENTS.hasOwnProperty(key)) {
					data[key] = list[key] || config.BLOG_TEMPLATE_COMPONENTS[key]
				}
			}
			return data
		}
	}
}
</script>
