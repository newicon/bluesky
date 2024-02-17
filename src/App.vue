<template>
	<PageLayout>

		<template #header>
		</template>

		<RouterView />

		<template #footer>
			<BuiNavBar :items="navItems"></BuiNavBar>
		</template>

	</PageLayout>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import PageLayout from './components/PageLayout.vue'
import BuiNavBar from './components/BuiNavBar.vue'
import type { MenuItem } from './components/BuiNavBar.vue'



export default {
	components: { PageLayout, RouterView, BuiNavBar },
	data() {

		const navItems: MenuItem[] = [
			{
				title: 'Home',
				route: 'Home',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
				to: '/'
			},
			{
				title: 'About',
				route: 'About',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>`,
				to: '/About'
			},
			{
				title: 'Color',
				route: 'Color',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>`,
				to: '/color'
			},
		];


		return { navItems: navItems }
	},
	mounted() {
		(window as any).app = this
	}
}
</script>