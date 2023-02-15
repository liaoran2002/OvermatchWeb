import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import mytitle from '@/components/mytitle.vue'
import myfoot from '@/components/myfoot.vue'

const app = createApp(App)
app.use(router)
app.component('mytitle', mytitle)
app.component('myfoot', myfoot)
app.mount('#app')
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title + " -《守望先锋》“归来”官方网站"
	} else {
		document.title = "《守望先锋》“归来”官方网站"
	}
	next()
})
