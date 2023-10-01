<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Relative_Posts
					v-for="item in scheme[currentPostType].relative"
					:key="item.action_key"
					:value="data[item.action_key]"
					:action="action"
					:title="item.title"
					:action_key="item.action_key"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
import scheme from '~/config/scheme'
export default {
	name: 'bonusCategory',
	props: ['data', 'action', 'postType'],
	mixins: [global],
	data() {
		return {
			currentPostType: 'DEFAULT',
			scheme: scheme
		}
	},
	mounted() {
		if (this.postType in scheme) this.currentPostType = this.postType
	}
}
</script>
