<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.banner" title="Banner" :action="action" action_key="banner" />
				<MM_Input :value="data.bonus" :action="action" title="Bonus" action_key="bonus" />
				<MM_Input :value="data.min_deposit" :action="action" title="Min deposit" action_key="min_deposit" />
				<MM_Input :value="data.wagering" :action="action" title="Wagering" action_key="wagering" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
				<MM_Multiple_Input_Options
					:value="data.ref"
					:action="action"
					title="Referral link"
					action_key="ref"
					:items="geo"
				/>
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
import config from '~/config'
export default {
	name: 'bonusMeta',
	props: ['data', 'action'],
	data() {
		return {
			geo: config.GEO
		}
	},
	mixins: [global]
}
</script>
