<template>
	<div>
		<v-app-bar app dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn text exact class="font-podkova-bold nav-link" v-for="link in links" :key="link.title" :to="link.url">
					{{ link.title }}
				</v-btn>
				<v-btn text exact class="font-podkova-bold nav-link" @click="logout" no-prefetch>
					LOGOUT
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<v-navigation-drawer app temporary v-model="drawer" class="grey darken-4" color="deep-orange darken-2">
			<v-container>
				<v-layout class="mt-5 mb-5" wrap>
					<v-btn
						class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
						dark
						exact
						no-prefetch
						to="/admin"
					>
						<v-icon left color="white">mdi-bank</v-icon>
						Main
					</v-btn>
					<v-btn
						class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
						dark
						no-prefetch
						to="/admin/settings"
					>
						<v-icon left color="white">mdi-message-draw</v-icon>
						Settings
					</v-btn>
					<v-btn
						class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
						dark
						no-prefetch
						to="/admin/static-pages"
					>
						<v-icon left color="white">mdi-checkbox-multiple-blank</v-icon>
						Static Pages
					</v-btn>
					<v-btn
						class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
						dark
						no-prefetch
						to="/admin/options"
					>
						<v-icon left color="white">mdi-share-variant</v-icon>
						Options
					</v-btn>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Casino
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in casinoPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Vendors
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in vendorsPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								News
							</v-btn>
						</template>
						<v-list>
							<v-list-item no-prefetch class="font-podkova-bold" v-for="(item, i) in newsPage" :key="i" :to="item.link">
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Slots
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in slotsPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Bonuses
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in bonusesPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Currencies
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in currencyPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Languages
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in languagePage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Payments
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in paymentPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-menu transition="slide-y-transition" bottom no-prefetch class="d-block">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon left>mdi-folder-multiple-outline</v-icon>
								Authors
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								no-prefetch
								class="font-podkova-bold"
								v-for="(item, i) in authorPage"
								:key="i"
								:to="item.link"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-layout>
				<v-layout class="justify-space-around mt-3 align-center">
					<v-btn
						class="deep-orange darken-2 display_block justify-start"
						color="deep-orange darken-2 font-podkova-bold"
						@click="logout"
					>
						<v-icon left color="white">mdi-logout</v-icon>
						Logout
					</v-btn>
				</v-layout>
			</v-container>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'AdminMenu',
	data() {
		return {
			drawer: false,
			links: [
				{ title: 'MAIN', url: '/admin', icon: 'mdi-bank' },
				{ title: 'SETTINGS', url: '/admin/settings', icon: 'mdi-message-draw' },
				{ title: 'STATIC PAGES', url: '/admin/static-pages', icon: 'mdi-checkbox-multiple-blank' },
				{ title: 'OPTIONS', url: '/admin/options', icon: 'mdi-share-variant' },
				{ title: 'CASINO', url: '/admin/casino', icon: 'mdi-cash-usd' },
				{ title: 'CURRENCIES', url: '/admin/currency', icon: 'mdi-cards-spade' },
				{ title: 'VENDORS', url: '/admin/vendor', icon: 'mdi-android-studio' },
				{ title: 'NEWS', url: '/admin/news', icon: 'mdi-cash' },
				{ title: 'GAMES', url: '/admin/game', icon: 'mdi-gamepad-variant' },
				{ title: 'BONUSES', url: '/admin/bonus', icon: 'mdi-gamepad-variant' },
				{ title: 'LANGUAGES', url: '/admin/language', icon: 'mdi-gamepad-variant' },
				{ title: 'PAYMENTS', url: '/admin/payment', icon: 'mdi-gamepad-variant' },
				{ title: 'AUTHORS', url: '/admin/author', icon: 'mdi-gamepad-variant' }
			],
			casinoPage: [
				{ title: 'All casino', link: '/admin/casino' },
				{ title: 'Add casino', link: '/admin/casino/add' },
				{ title: 'All category casino', link: '/admin/casino/category' },
				{ title: 'Add category casino', link: '/admin/casino/category/add' }
			],
			vendorsPage: [
				{ title: 'All vendors', link: '/admin/vendor' },
				{ title: 'Add vendors', link: '/admin/vendor/add' },
				{ title: 'All category vendors', link: '/admin/vendor/category' },
				{ title: 'Add category vendors', link: '/admin/vendor/category/add' }
			],
			newsPage: [
				{ title: 'All news', link: '/admin/news' },
				{ title: 'Add news', link: '/admin/news/add' },
				{ title: 'All category news', link: '/admin/news/category' },
				{ title: 'Add category news', link: '/admin/news/category/add' }
			],
			slotsPage: [
				{ title: 'All games', link: '/admin/game' },
				{ title: 'Add games', link: '/admin/game/add' },
				{ title: 'All category games', link: '/admin/game/category' },
				{ title: 'Add category games', link: '/admin/game/category/add' }
			],
			bonusesPage: [
				{ title: 'All bonuses', link: '/admin/bonus' },
				{ title: 'Add bonus', link: '/admin/bonus/add' },
				{ title: 'All category bonuses', link: '/admin/bonus/category' },
				{ title: 'Add category bonuses', link: '/admin/bonus/category/add' }
			],
			currencyPage: [
				{ title: 'All currencies', link: '/admin/currency' },
				{ title: 'Add currency', link: '/admin/currency/add' },
				{ title: 'All category currency', link: '/admin/currency/category' },
				{ title: 'Add category currency', link: '/admin/currency/category/add' }
			],
			languagePage: [
				{ title: 'All languages', link: '/admin/language' },
				{ title: 'Add language', link: '/admin/language/add' },
				{ title: 'All category language', link: '/admin/language/category' },
				{ title: 'Add category language', link: '/admin/language/category/add' }
			],
			paymentPage: [
				{ title: 'All payments', link: '/admin/payment' },
				{ title: 'Add payment', link: '/admin/payment/add' },
				{ title: 'All category payment', link: '/admin/payment/category' },
				{ title: 'Add category payment', link: '/admin/payment/category/add' }
			],
			authorPage: [
				{ title: 'All authors', link: '/admin/author' },
				{ title: 'Add author', link: '/admin/author/add' },
				{ title: 'All category author', link: '/admin/author/category' },
				{ title: 'Add category author', link: '/admin/author/category/add' }
			]
		}
	},
	methods: {
		async logout() {
			const user = this.$store.getters['user/getUser']
			const data = {
				session: user.session,
				id: user.id
			}
			await this.$store.dispatch('user/logout', data)
			const currentUser = this.$store.getters['user/getUser']
			if (!currentUser.login) this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.border {
	border: 1px solid red;
}
.display_block {
	width: 100%;
}
.nav-link {
	font-size: 12px;
}
</style>
