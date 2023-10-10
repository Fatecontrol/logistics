import uniFetch from './uni-fetch.js';

// 分页查询消息列表
export const messageApi = (contentType, page = 1, pageSize = 5) => {
	if (!contentType) return
	return uniFetch.get('/driver/messages/page', { contentType, page, pageSize });
};
// 根据类型查询未读消息数量
export const messageCountTypeApi = (contentType) => {
	return uniFetch.get(`/driver/messages/countType/${contentType}`);
};

// 全部已读
export const readAllApi = (contentType) => {
	return uniFetch.put(`/driver/messages/readAll/${contentType}`);
};

// 标记已读
export const markReadApi = (id) => {
	return uniFetch.put(`/driver/messages/${id}`);
};