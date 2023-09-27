<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<!--
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    :title = '"Referal link"' 
                    :action_key = '"ref"'
                    />
                <MM_Input
                    :value = 'data.value'
                    :action = 'action' 
                    :title = '"Value"' 
                    :action_key = '"value"'
                /> -->
				<MM_Rating :value="data.rating" :action="action" :title="'Rating'" :action_key="'rating'" />
				<!--
				<MM_Multiple_Input_Deep
					:value="data.bonus_system"
					:action="action"
					:title="'Bonus system'"
					:action_key="'bonus_system'"
				/>
				<MM_Multiple_Input_Deep_Double
					:value="data.characters"
					:action="action"
					:title="'Characters'"
					:action_key="'characters'"
				/> -->
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import MM_Input from '~/components/lib/MM_Input'
import MM_Rating from '~/components/lib/MM_Rating'
import MM_Multiple_Input_Deep from '~/components/lib/MM_Multiple_Input_Deep.vue'
import MM_Multiple_Input_Deep_Double from '~/components/lib/MM_Multiple_Input_Deep_Double.vue'
import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input.vue'
export default {
	name: 'bonusMeta',
	props: ['data', 'action'],
	components: {
		MM_Input,
		MM_Rating,
		MM_Multiple_Input_Deep,
		MM_Input,
		MM_Multiple_Input_Deep_Double,
		MM_Multiple_Input
	},
	data() {
		return {}
	}
}
</script>
