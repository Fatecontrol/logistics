// 引入pinia
import {createPinia} from 'pinia'
// 持久化插件
import piniaPluginPersistedstate from '@/stores/persist.js'

// 实例化pinia
const pinia = createPinia()

export default function(app){
	// 注册持久化插件
	pinia.use(piniaPluginPersistedstate)
	// 项目注册pinia
	app.use(pinia)
}