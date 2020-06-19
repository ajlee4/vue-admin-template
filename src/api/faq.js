import request from '@/utils/request';

// CATEGORIES
export function fetchFaqCategoryList(query) {
	return request({
		url: '/api/faq-categories',
		method: 'get',
		params: query,
	});
}
export function fetchCurrentFaqCategory(id) {
	return request({
		url: `/api/faq-categories/${id}/edit`,
		method: 'get',
	});
}
export function createFaqCategory(data) {
	return request({
		url: '/api/faq-categories/store',
		method: 'post',
		data,
	});
}
export function deleteFaqCategory(id) {
	return request({
		url: `/api/faq-categories/${id}/destroy`,
		method: 'delete',
	});
}
export function updateFaqCategory(id, data) {
	return request({
		url: `/api/faq-categories/${id}/update`,
		method: 'put',
		data,
	});
}

// Question
export function fetchFaqQuestionList(query) {
	return request({
		url: '/api/faqs',
		method: 'get',
		params: query,
	});
}
export function fetchCurrentFaqQuestion(id) {
	return request({
		url: `/api/faqs/${id}/edit`,
		method: 'get',
	});
}
export function createFaqQuestion(data) {
	return request({
		url: '/api/faqs/store',
		method: 'post',
		data,
	});
}
export function deleteFaqQuestion(id) {
	return request({
		url: `/api/faqs/${id}/destroy`,
		method: 'delete',
	});
}
export function updateFaqQuestion(id, data) {
	return request({
		url: `/api/faqs/${id}/update`,
		method: 'put',
		data,
	});
}
