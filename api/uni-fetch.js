import { createUniFetch } from 'uni-app-fetch'
// 定义tabbar路径
const tabBarPagePaths = ['pages/test/index', 'pages/mess/index', 'pages/mine/index'];
// 引入user store
import {useUserStore} from '@/stores/user.js'
// 使用自定义选项创建实例
const uniFetch = createUniFetch({
  loading: { title: 'loading...' },
  baseURL: 'https://slwl-api.itheima.net',
  intercept: {
    // 请求拦截器
    request(options) {
			const store = useUserStore()
			// if(store.token) options.header.Authorization = store.token
			const defaultHeader = {
				Authorization:store.token
			}
			options.header = Object.assign({},defaultHeader,options.header)
			return options
		},
    // 响应拦截器
    response(result) {
			if(result.statusCode === 200 && result.data.code === 200){
				return result.data
			}
			if(result.statusCode === 401){
				// token过期处理
				// 获取页面栈 数组
				const pageStack = getCurrentPages()
				const redirectURL = pageStack[pageStack.length-1].route
				// 查看是否是tabbar页面
				const routeType = tabBarPagePaths.includes(redirectURL)?'switchTab':'redirectTo'
				// 跳转到登录页
				return uni.redirectTo({
					url:`/pages/login/index?routeType=${routeType}&redirectURL=/${redirectURL}`
				})
			}
			uni.utils.toast(result.data.msg || '请求失败')
		},
  },
})
// 模块导出
export default uniFetch