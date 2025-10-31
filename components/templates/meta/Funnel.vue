<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Multiple_Input_Options
					:value="data.ref"
					:action="action"
					title="Referral link"
					action_key="ref"
					:items="geo"
				/>
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
				<MM_Nav_Menu
					:items="funnelTemplateComponents"
					:value="data.nav_menu"
					:action="action"
					title="Nav menu"
					action_key="nav_menu"
				/>
				<MM_Input :value="data.faq_title" :action="action" title="Faq title" action_key="faq_title" />
				<MM_Multiple_Input_Text :value="data.faq" :action="action" title="Faq" action_key="faq" />
				<MM_Multiple_Input_Image :value="data.video" :action="action" title="Video" action_key="video" />
				<MM_Rich_Text :value="data.video_text" :action="action" title="Video text" action_key="video_text" />
	            <MM_Checkbox :value="data.show_main_page" :action="action" title="Show on main page" action_key="show_main_page" />				
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import config from '~/config'
import global from '~/mixins/global'

export default {
	name: 'funnelMeta',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			labels: config.LABELS,
			geo: config.GEO,
			funnelTemplateComponents: Object.keys(config.FUNNEL_TEMPLATE_COMPONENTS)
		}
	},
	methods: {
		listComponents(list) {
			const data = {}
			for (const key in config.FUNNEL_TEMPLATE_COMPONENTS) {
				if (config.FUNNEL_TEMPLATE_COMPONENTS.hasOwnProperty(key)) {
					data[key] = list[key] || config.FUNNEL_TEMPLATE_COMPONENTS[key]
				}
			}
			return data
		}
	}
}
</script>
