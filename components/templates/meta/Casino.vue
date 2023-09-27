<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<!--
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    title = "Referal link" 
                    action_key = "ref"
                    />
                <MM_Multiple_Input_Text 
                    :value = 'data.faq'
                    :action = 'action' 
                    title = "Faq" 
                    action_key = "faq"
                    />
                -->
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
				<!--
				<MM_Multiple_Options_Three_Input
					:value="data.licenses"
					:action="action"
					:items="licenses"
					title="Licenses"
					action_key="licenses"
				/>
				<MM_Multiple_Select_Three_Input
					:value="data.exchange"
					:action="action"
					:items="payments"
					title="Exchange"
					action_key="exchange"
				/>
				<MM_Multiple_Two_Input
					:value="data.slot_category"
					:action="action"
					title="Slot Category"
					action_key="slot_category"
				/>
				<MM_Multiple_Two_Input
					:value="data.payment_methods"
					:action="action"
					title="Payment methods"
					action_key="payment_methods"
				/>
				<MM_Multiple_Two_Input
					:value="data.payment_out_methods"
					:action="action"
					title="Payment out methods"
					action_key="payment_out_methods"
				/>
				<MM_Multiple_Two_Input_Text_Image :value="data.events" :action="action" title="Events" action_key="events" />
				<MM_Input :value="data.min_deposit" :action="action" title="Min deposit" action_key="min_deposit" />
				<MM_Input :value="data.min_payout" :action="action" title="Min payout" action_key="min_payout" />
				<MM_Multiple_Input
					:value="data.active_languages"
					:action="action"
					title="Languages"
					action_key="active_languages"
				/>
                -->
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
import MM_Input from '~/components/lib/MM_Input'
import MM_Rating from '~/components/lib/MM_Rating'
import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
import MM_Checkbox from '~/components/lib/MM_Checkbox'
import MM_Multiple_Two_Input from '~/components/lib/MM_Multiple_Two_Input'
import MM_Review from '~/components/lib/MM_Review'
import MM_Multiple_Options from '~/components/lib/MM_Multiple_Options'
import MM_Multiple_Two_Input_Text_Image from '~/components/lib/MM_Multiple_Two_Input_Text_Image'
import MM_Multiple_Options_Three_Input from '~/components/lib/MM_Multiple_Options_Three_Input'
import MM_Multiple_Select_Three_Input from '~/components/lib/MM_Multiple_Select_Three_Input'
import config from '~/config'
export default {
	name: 'casinoMeta',
	props: ['data', 'action'],
	components: {
		MM_Multiple_Input_Text,
		MM_Input,
		MM_Rating,
		MM_Multiple_Input,
		MM_Checkbox,
		MM_Multiple_Two_Input,
		MM_Review,
		MM_Multiple_Options,
		MM_Multiple_Two_Input_Text_Image,
		MM_Multiple_Options_Three_Input,
		MM_Multiple_Select_Three_Input
	},
	data() {
		return {
			licenses: config.LICENSES,
			payments: config.PAYMENTS
		}
	}
}
</script>
