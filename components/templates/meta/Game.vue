<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.slider_img" title="Slider img" :action="action" action_key="slider_img" />
				<MM_Input :value="data.iframe" :action="action" title="iframe" action_key="iframe" />
				<MM_Input :value="data.rtp" :action="action" title="RTP" action_key="rtp" />
				<MM_Input :value="data.min_bid" :action="action" title="Min bid" action_key="min_bid" />
				<MM_Input :value="data.scheme" :action="action" title="Scheme" action_key="scheme" />
				<MM_Input :value="data.lines" :action="action" title="Lines" action_key="lines" />
				<MM_Checkbox :value="data.game_week" :action="action" title="Game Week" action_key="game_week" />
				<MM_Multiple_Input_Options
					:value="data.ref"
					:action="action"
					title="Referral link"
					action_key="ref"
					:items="geo"
				/>
				<MM_Characters_Game :value="data.symbols" :action="action" title="Symbols" action_key="symbols" />
				<MM_Multiple_Two_Input_Image
					:value="data.screenshots"
					:action="action"
					title="Screenshots"
					action_key="screenshots"
				/>
				<MM_Input :value="data.faq_title" :action="action" title="Faq title" action_key="faq_title" />
				<MM_Multiple_Input_Text :value="data.faq" :action="action" title="Faq" action_key="faq" />
				<MM_Input :value="data.video_title" :action="action" title="Video title" action_key="video_title" />
				<MM_Multiple_Input_Image :value="data.video" :action="action" title="Video" action_key="video" />
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
				<MM_Order_Components
					:value="listComponents(data.order_components)"
					:action="action"
					title="Order Components"
					action_key="order_components"
				/>
				<MM_Nav_Menu
					:items="templateComponents"
					:value="data.nav_menu"
					:action="action"
					title="Nav menu"
					action_key="nav_menu"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
import config from '~/config'
export default {
	name: 'slotMeta',
	props: ['data', 'action'],
	data() {
		return {
			geo: config.GEO,
			templateComponents: Object.keys(config.SLOT_TEMPLATE_COMPONENTS)
		}
	},
	methods: {
		listComponents(list) {
			const data = {}
			for (const key in config.SLOT_TEMPLATE_COMPONENTS) {
				if (config.SLOT_TEMPLATE_COMPONENTS.hasOwnProperty(key)) {
					data[key] = list[key] || config.SLOT_TEMPLATE_COMPONENTS[key]
				}
			}
			return data
		}
	},
	mixins: [global]
}
</script>
