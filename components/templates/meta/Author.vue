<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Input :value="data.position" :action="action" title="Position" action_key="position" />
				<MM_Multiple_Input :value="data.advantages" :action="action" title="Advantages list" action_key="advantages" />
				<MM_Options
					v-if="data"
					:value="data.role"
					:all_value="authorRoles"
					title="Author role"
					:action="action"
					action_key="role"
				/>
				<MM_Multiple_Two_Input_Image :value="data.social" :action="action" title="social" action_key="social" />
				<MM_Multiple_Two_Input_Image
					:value="data.highlights"
					:action="action"
					title="highlights"
					action_key="highlights"
				/>
				<MM_Rich_Text :value="data.about" :action="action" title="About" action_key="about" />
				<MM_Image v-if="data" :value="data.about_img" title="About img" :action="action" action_key="about_img" />
				<MM_Multiple_Three_Input_Image
					:value="data.experience"
					:action="action"
					title="Experience"
					action_key="experience"
				/>
				<MM_Multiple_Three_Input_Image
					:value="data.education"
					:action="action"
					title="Education"
					action_key="education"
				/>
				<MM_Rich_Text
					:value="data.articles_overview"
					:action="action"
					title="Articles overview"
					action_key="articles_overview"
				/>
				<MM_Multiple_Three_Input
					:value="data.articles_overview_keys"
					:action="action"
					title="Articles overview keys"
					action_key="articles_overview_keys"
				/>
				<MM_Multiple_Input_Text :value="data.faq" :action="action" title="Faq" action_key="faq" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
import config from '@/config'

export default {
	name: 'authorMeta',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			authorRoles: config.AUTHOR_ROLES
		}
	}
}
</script>
