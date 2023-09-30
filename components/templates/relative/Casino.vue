<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Relative_Posts :value="data.category" :action="action" title="Relative category" action_key="category" />
				<MM_Relative_Posts
					:value="data.casino_vendor"
					:action="action"
					title="Relative vendors"
					action_key="casino_vendor"
				/>
				<MM_Relative_Posts
					:value="data.casino_payment"
					:action="action"
					title="Relative payments"
					action_key="casino_payment"
				/>
				<MM_Relative_Posts
					:value="data.casino_currency"
					:action="action"
					title="Relative currency"
					action_key="casino_currency"
				/>
				<MM_Relative_Posts
					:value="data.casino_language"
					:action="action"
					title="Relative language"
					action_key="casino_language"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import MM_Relative_Posts from '~/components/lib/MM_Relative_Posts'
export default {
	name: 'casinoCategory',
	props: ['data', 'action'],
	components: { MM_Relative_Posts },
	data() {
		return {}
	}
}
</script>
