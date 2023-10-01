<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Relative_Posts :value="data.category" :action="action" title="Relative category" action_key="category" />
				<MM_Relative_Posts
					:value="data.bonus_casino"
					:action="action"
					title="Relative casino"
					action_key="bonus_casino"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'bonusCategory',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {}
	}
}
</script>
