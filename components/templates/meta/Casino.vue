<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.icon" title="Icon" :action="action" action_key="icon" />
				<MM_Input :value="data.wager" :action="action" title="wager" action_key="wager" />
				<MM_Input :value="data.min_dep" :action="action" title="min_dep" action_key="min_dep" />
				<MM_Input :value="data.bonus_value" :action="action" title="bonus_value" action_key="bonus_value" />
				<MM_Multiple_Input :value="data.ref" :action="action" title="Referral link" action_key="ref" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
				<MM_Color_Picker :value="data.color" :action="action" title="Color" action_key="color" />
				<MM_Multiple_Input :value="data.advantages" :action="action" title="Advantages" action_key="advantages" />
				<MM_Rich_Text
					:value="data.content_reviews"
					:action="action"
					title="Content reviews"
					action_key="content_reviews"
				/>
				<MM_Rich_Text
					:value="data.content_bonuses"
					:action="action"
					title="Content bonuses"
					action_key="content_bonuses"
				/>
				<MM_Rich_Text
					:value="data.content_payments"
					:action="action"
					title="Content payments"
					action_key="content_payments"
				/>
				<MM_Rich_Text :value="data.content_games" :action="action" title="Content games" action_key="content_games" />
				<MM_Options :value="data.label" :action="action" :all_value="labels" title="Labels" action_key="label" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import config from '~/config'
import global from '~/mixins/global'
export default {
	name: 'casinoMeta',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			labels: config.LABELS
		}
	}
}
</script>
