import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import News from '../views/news.vue'
import Heroes from '../views/heroes.vue'
import Download from '../views/download.vue'
import Media from '../views/media.vue'
import Shop from "../views/shop.vue"

const router = createRouter({
	history: createWebHistory(
		import.meta.env.BASE_URL),
	routes: [
		{
			path:'/',
			redirect:'/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/news',
			name: 'news',
			component: News,
			meta:{
				title:"新闻"
			}
		},
		{
			path: '/heroes',
			name: 'heroes',
			component: Heroes,
			meta:{
				title:"英雄"
			}
		},
		{
			path: '/download',
			name: 'download',
			component: Download,
			meta:{
				title:"下载"
			}
		},
		{
			path: '/media',
			name: 'media',
			component: Media,
			meta:{
				title:"视频图片"
			}
		},
		{
			path: '/shop',
			name: 'shop',
			component: Shop,
			meta:{
				title:"商城"
			}
		}
	]
})

export default router
