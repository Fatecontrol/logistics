import uniFetch from './uni-fetch.js'

// 登录
export const loginApi = (data)=>{
	if (!data.account || !data.password) return;
	return uniFetch({
		url:'/driver/login/account',
		method:'POST',
		data
	})
}
// 个人信息
export const userInfoApi = ()=>{
	return uniFetch({
		url:'/driver/users',
		method:'GET',
	})
}
// 任务
export const taskApi = (year,month)=>{
	if(!year || !month) return;
	return uniFetch({
		url:'/driver/users/taskReport',
		method:'GET',
		data:{
			year,month
		}
	})
}
// 车辆信息
export const truckApi = ()=>{
	return uniFetch({
		url:'/driver/users/truck',
		method:'GET'
	})
}