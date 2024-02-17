import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'

export enum RouteNames {
	Home = "Home",
	About = "About",
	Component = "Component",
	Color = "Color",
}
export interface RouteInterface {
	[key: string]: RouteRecordRaw
}

export const Routes = {
	[RouteNames.Home]: {
		path: '/',
		name: RouteNames.Home,
		component: HomeView,
		meta: { transition: 'slide' },
	},
	[RouteNames.Component]: {
		path: '/component',
		name: RouteNames.Component,
		component: () => import('../views/ComponentView.vue'),
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
	},
	[RouteNames.Color]: {
		path: '/color',
		name: RouteNames.Color,
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/ColorView.vue'),
		meta: { transition: 'slide' },
	}
}
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: Object.values(Routes) 
})

// router.afterEach((to, from) => {
// 	if (to.meta.transition === 'slide' || from.meta.transition === 'slide') {
// 		const toDepth = to.path.split('/').length
// 		const fromDepth = from.path.split('/').length
// 		to.meta.transitionName = toDepth < fromDepth ? 'slideback' : 'slide'
// 	}
// })


export default router