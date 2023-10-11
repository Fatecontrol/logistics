/**
 *  任务模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 获取任务列表
export const tasksApi = (data) => {
	return uniFetch.get('/driver/tasks/list', data);
};

// 提货
export const takeDeliveryApi = (data) => {
	return uniFetch.POST('/driver/tasks/takeDelivery', data);
};

// 交付
export const deliverApi = (data) => {
	return uniFetch.POST('/driver/tasks/deliver', data);
};

// 任务详情
export const taskDetailApi = (jobId) => {
	return uniFetch.get(`/driver/tasks/details/${jobId}`);
};

// 延迟提货
export const delayApi = (data) => {
	return uniFetch.put('/driver/tasks/delay', data);
};

// 联系调度中心

// 条件查询货物信息列表

// 回车登记

// 上报异常

//