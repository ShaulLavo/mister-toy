import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home-page.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
	history: createWebHashHistory(),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/toy',
			name: 'toy-app',
			component: toyApp
		},
		{
			path: '/toy/:id',
			name: 'toy-details',
			component: toyDetails
		},
		{
			path: '/toy/edit/:id?',
			name: 'toy-edit',
			component: toyEdit
		},
		{
			path: '/about',
			name: 'about',
			component: about
		}
	]
})

export default router
