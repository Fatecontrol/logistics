import uniFetch from './uni-fetch.js'

// 登录
export const login = (data)=>{
	return uniFetch({
		url:'/driver/login/account',
		method:'POST',
		data
	})
}