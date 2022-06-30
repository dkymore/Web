import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')

router.beforeEach(async(to, from, next) => {
    
    NProgress.start()

    document.title = to.meta.title

    next()
    NProgress.done()

} )