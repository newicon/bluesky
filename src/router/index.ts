import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'

enum RouteNames {
	Home = "Home",
	About = "About",
}
interface RouteInterface {
	[key: string]: RouteRecordRaw
}

const routes: RouteInterface = {
	[RouteNames.Home]: {
		path: '/',
		name: RouteNames.Home,
		component: HomeView,
		meta: { transition: 'slide' },
	},
	[RouteNames.About]: {
		path: '/about',
		name: RouteNames.About,
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue'),
		meta: { transition: 'slide' },
	}
}
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: RouteNames.Home,
			component: HomeView,
			meta: { transition: 'slide' },
		},
		{
			path: '/about',
			name: RouteNames.About,
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
			meta: { transition: 'slide' },
		}
	]
})

// router.afterEach((to, from) => {
// 	if (to.meta.transition === 'slide' || from.meta.transition === 'slide') {
// 		const toDepth = to.path.split('/').length
// 		const fromDepth = from.path.split('/').length
// 		to.meta.transitionName = toDepth < fromDepth ? 'slideback' : 'slide'
// 	}
// })


export default router
