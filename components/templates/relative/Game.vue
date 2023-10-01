<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Relative_Posts :value="data.category" :action="action" title="Relative category" action_key="category" />
				<MM_Relative_Posts
					:value="data.game_vendor"
					:action="action"
					title="Relative vendor"
					action_key="game_vendor"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'slotCategory',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {}
	}
}
</script>
