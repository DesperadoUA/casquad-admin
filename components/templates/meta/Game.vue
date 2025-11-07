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
				<MM_Input
					:value="data.characters_title"
					:action="action"
					title="Characters title"
					action_key="characters_title"
				/>
				<MM_Input
					:value="data.characters_software"
					:action="action"
					title="Characters software"
					action_key="characters_software"
				/>
				<MM_Input
					:value="data.characters_themes"
					:action="action"
					title="Characters themes"
					action_key="characters_themes"
				/>
				<MM_Input
					:value="data.characters_release_date"
					:action="action"
					title="Characters release date"
					action_key="characters_release_date"
				/>
				<MM_Input
					:value="data.characters_slot_type"
					:action="action"
					title="Characters slot type"
					action_key="characters_slot_type"
				/>
				<MM_Input
					:value="data.characters_volatility"
					:action="action"
					title="Characters volatility"
					action_key="characters_volatility"
				/>
				<MM_Input :value="data.characters_rtp" :action="action" title="Characters rtp" action_key="characters_rtp" />
				<MM_Input
					:value="data.characters_paylines"
					:action="action"
					title="Characters paylines"
					action_key="characters_paylines"
				/>
				<MM_Input
					:value="data.characters_reels"
					:action="action"
					title="Characters reels"
					action_key="characters_reels"
				/>
				<MM_Input
					:value="data.characters_min_bet"
					:action="action"
					title="Characters min bet"
					action_key="characters_min_bet"
				/>
				<MM_Checkbox
					:value="data.characters_bonus_round"
					:action="action"
					title="Characters bonus round"
					action_key="characters_bonus_round"
				/>
				<MM_Checkbox
					:value="data.characters_free_spins"
					:action="action"
					title="Characters free spins"
					action_key="characters_free_spins"
				/>
				<MM_Checkbox
					:value="data.characters_wild"
					:action="action"
					title="Characters wild"
					action_key="characters_wild"
				/>
				<MM_Checkbox
					:value="data.characters_mobile"
					:action="action"
					title="Characters mobile"
					action_key="characters_mobile"
				/>
				<MM_Checkbox
					:value="data.characters_multiplier"
					:action="action"
					title="Characters multiplier"
					action_key="characters_multiplier"
				/>
				<MM_Checkbox
					:value="data.characters_scatter"
					:action="action"
					title="Characters scatter"
					action_key="characters_scatter"
				/>
				<MM_Checkbox
					:value="data.characters_progressive"
					:action="action"
					title="Characters progressive"
					action_key="characters_progressive"
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
				<MM_Rich_Text :value="data.video_text" :action="action" title="Video text" action_key="video_text" />
				<MM_Multiple_Input_Image :value="data.video" :action="action" title="Video" action_key="video" />
				<MM_Input :value="data.details_title" :action="action" title="Details title" action_key="details_title" />
				<MM_Multiple_Two_Input_Image
					:value="data.details"
					:action="action"
					title="Details"
					action_key="details"
					:labels="{
						title: 'Title',
						subTitle: 'Sub title'
					}"
				/>
				<MM_Input
					:value="data.rtp_description_title"
					:action="action"
					title="Rtp description title"
					action_key="rtp_description_title"
				/>
				<MM_Rich_Text
					:value="data.rtp_description"
					:action="action"
					title="Rtp description"
					action_key="rtp_description"
				/>
				<MM_Input :value="data.pros_cons_title" :action="action" title="Pros cons title" action_key="pros_cons_title" />
				<MM_Input :value="data.pros_title" :action="action" title="Pros title" action_key="pros_title" />
				<MM_Input :value="data.cons_title" :action="action" title="Cons title" action_key="cons_title" />
				<MM_Multiple_Input :value="data.pros" :action="action" title="Pros" action_key="pros" />
				<MM_Multiple_Input :value="data.cons" :action="action" title="Cons" action_key="cons" />
				<MM_Input :value="data.bonuses_title" :action="action" title="Bonuses title" action_key="bonuses_title" />
				<MM_Rich_Text :value="data.bonuses_text" :action="action" title="Bonuses text" action_key="bonuses_text" />
				<MM_Input :value="data.games_title" :action="action" title="Games title" action_key="games_title" />
				<MM_Rich_Text :value="data.games_text" :action="action" title="Games text" action_key="games_text" />
				<MM_Checkbox
					:value="data.mobile_version_ios"
					:action="action"
					title="Mobile version ios"
					action_key="mobile_version_ios"
				/>
				<MM_Checkbox
					:value="data.mobile_one_hand_use"
					:action="action"
					title="Mobile one hand use"
					action_key="mobile_one_hand_use"
				/>
				<MM_Checkbox
					:value="data.mobile_autospins"
					:action="action"
					title="Mobile autospins"
					action_key="mobile_autospins"
				/>
				<MM_Checkbox :value="data.mobile_tls" :action="action" title="Mobile TLS" action_key="mobile_tls" />
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
