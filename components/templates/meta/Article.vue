<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image v-if="data" :value="data.banner" title="Banner" :action="action" action_key="banner" />
				<MM_Rich_Text :value="data.content_1" :action="action" title="Content 1" action_key="content_1" />
				<MM_Rich_Text :value="data.content_2" :action="action" title="Content 2" action_key="content_2" />
				<MM_Rich_Text :value="data.content_3" :action="action" title="Content 3" action_key="content_3" />
				<MM_Rich_Text :value="data.content_4" :action="action" title="Content 4" action_key="content_4" />
				<MM_Rich_Text :value="data.content_5" :action="action" title="Content 5" action_key="content_5" />
				<MM_Rich_Text :value="data.content_6" :action="action" title="Content 6" action_key="content_6" />
				<MM_Rich_Text :value="data.content_7" :action="action" title="Content 7" action_key="content_7" />
				<MM_Rich_Text :value="data.content_8" :action="action" title="Content 8" action_key="content_8" />
				<MM_Rich_Text :value="data.content_9" :action="action" title="Content 9" action_key="content_9" />
				<MM_Rich_Text :value="data.content_10" :action="action" title="Content 10" action_key="content_10" />
				<MM_Input :value="data.pros_cons_title" :action="action" title="Pros cons title" action_key="pros_cons_title" />
				<MM_Input :value="data.pros_title" :action="action" title="Pros title" action_key="pros_title" />
				<MM_Input :value="data.cons_title" :action="action" title="Cons title" action_key="cons_title" />
				<MM_Multiple_Input :value="data.pros" :action="action" title="Pros" action_key="pros" />
				<MM_Multiple_Input :value="data.cons" :action="action" title="Cons" action_key="cons" />
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
