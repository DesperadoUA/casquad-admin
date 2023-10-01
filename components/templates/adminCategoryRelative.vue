<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Relative_Posts
					:value="data.relative_category"
					:action="action"
					title="Relative category"
					action_key="parent_id"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'adminCategoryRelative',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
