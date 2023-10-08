// 引入pinia
import registerPinia  from './register-pinia.js'

// 统一注册
export const globalRegister = {
	install(app){
		app.use(registerPinia)
	}
}