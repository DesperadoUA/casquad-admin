<template>
	<div>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-10">
					<h1 class="page_title font-podkova-bold" v-if="data">{{ data.parent_post }}</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="mt-0">
					<MM_Input v-if="data" :value="data.name" title="Name" :action="action" action_key="name" />
					<MM_Options
						v-if="data"
						:value="data.status"
						:all_value="['public', 'hide']"
						title="Status"
						:action="action"
						action_key="status"
					/>
					<MM_Input v-if="data" :value="data.email" title="Email" :action="action" action_key="email" />
					<MM_Input v-if="data" :value="data.title" title="Title" :action="action" action_key="title" />
					<MM_Textarea v-if="data" :value="data.content" title="Content" :action="action" action_key="content" />
					<MM_Date
						v-if="data"
						:value="data.create_at.slice(0, 10)"
						title="Create At"
						:action="action"
						action_key="create_at"
					/>
					<MM_Date
						v-if="data"
						:value="data.update_at.slice(0, 10)"
						title="Update At"
						:action="action"
						action_key="update_at"
					/>
					<MM_Rating v-if="data" :value="data.rating" title="Rating" :action="action" action_key="rating" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import global from '~/mixins/global'
export default {
	name: 'commonEditReviewPost',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
