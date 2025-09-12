<template>
	<div>
		<v-container class="container--fluid">
			<v-row>
				<v-col class="offset-1 col-10 mt-10">
					<h1 class="page_title font-podkova-bold">Vendor category</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="offset-1 col-10 mt-2 mb-5">
					<v-card>
						<v-tabs v-model="tab" background-color="dark" dark icons-and-text color="white">
							<v-tab href="#tab-1"> En <img lazy-src="/img/en.jpg" class="lang" src="/img/en.jpg" /> </v-tab>
							<v-tab href="#tab-2" class="hide">
								Ua
								<img
									lazy-src="https://admin.onlinecasino.ua/img/ua.jpg"
									class="lang"
									src="https://admin.onlinecasino.ua/img/ua.jpg"
								/>
							</v-tab>
						</v-tabs>
						<v-tabs-items v-model="tab">
							<v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
								<v-card>
									<v-card-text class="black">
										<div v-if="tab === 'tab-2'">
											<Search :postType="POST_DB" lang="2" />
											<CategoryLoop :data="postsUa" />
											<TotalPosts :data="data.ua.total" />
											<MM_Paginations
												:length="Math.ceil(data.ua.total / numberPostOnPage)"
												:lang="2"
												:action="POST_TYPE + '/setPaginationPage'"
												:numberOnPage="numberPostOnPage"
												:getterPage="POST_TYPE + '/getPage'"
											/>
										</div>
										<div v-else>
											<Search :postType="POST_DB" lang="1" />
											<CategoryLoop :data="postsRu" />
											<TotalPosts :data="data.ru.total" />
											<MM_Paginations
												:length="Math.ceil(data.ru.total / numberPostOnPage)"
												:lang="1"
												:action="POST_TYPE + '/setPaginationPage'"
												:numberOnPage="numberPostOnPage"
												:getterPage="POST_TYPE + '/getPage'"
											/>
										</div>
									</v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import categoryIndex from '@/mixins/categoryIndex'

export default {
	name: 'vendorCategory',
	mixins: [categoryIndex],
	data() {
		return {
			POST_TYPE: 'vendor_category',
			POST_DB: 'vendor_category',
			data: {
				ru: {
					post_slug: 'vendor/category',
					lang: 'ru',
					posts: [],
					total: 0
				},
				ua: {
					post_slug: 'vendor/category',
					lang: 'ua',
					posts: [],
					total: 0
				}
			}
		}
	}
}
</script>
