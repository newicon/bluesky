
<template>
	<nav class=" bg-black h-[80px] flex gap-14 text-white justify-around">

		<RouterLink v-for="item in items" :key="item.to" class="flex flex-col items-center justify-center" :to="item.to" :class="[isActive(item.route) ? 'text-primary' : 'text-secondary']">
			<div class="w-6 h-6" v-html="item.icon"></div>
			<span v-if="item.title">{{ item.title }}</span>
		</RouterLink>

	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export interface MenuItem {
	/**
	 * The display title of the menu item.
	 */
	title: string;
	/**
	 * The route name that corresponds to this menu item.
	 */
	route: string;
	/**
	* A string representing the SVG icon for the menu item.
	*/
	icon: string;
	/**
	 * The path or URL to navigate to when this menu item is clicked. For e.g. '/'
	 */
	to: string;
}

export default defineComponent({
	props: {
		items: {
			type: Array as () => MenuItem[],
			required: true,
			default() {
				return [
					{
						title: 'Home',
						route: 'Home',
						icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
						to: '/'
					},
				]
			}
		}
	},
	components: { RouterLink },
	methods: {
		isActive(name: string) {
			return name == this.$route.name
		}
	}
})

</script>