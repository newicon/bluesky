
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


export default defineComponent({
	components: { RouterLink },
	data() {
		return {
			items: [
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
			]
		}
	},
	methods: {
		isActive(name: string) {
			return name == this.$route.name
		}
	}
})

</script>