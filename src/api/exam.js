import request from '@/utils/request';

export function fetchExamCategories(query) {
	return request({
		url: '/api/exams/categories',
		method: 'get',
		params: query,
	});
}
export function deleteExamCategories(id) {
	return request({
		url: `/api/exams/categories/${id}/destroy`,
		method: 'delete',
	});
}

export function addExamCategories(data) {
	return request({
		url: '/api/exams/categories/store',
		method: 'post',
		data,
	});
}

export function editExamCategories(id, data) {
	return request({
		url: `/api/exams/categories/${id}/update`,
		method: 'put',
		data,
	});
}
export function fetchExamCategory(id) {
	return request({
		url: `/api/exams/categories/${id}/edit`,
		method: 'get',
	});
}

export function fetchExams(query) {
	return request({
		url: '/api/exams/single-exam',
		method: 'get',
		params: query,
	});
}

export function deleteExams(id) {
	return request({
		url: `/api/exams/single-exam/${id}/destroy`,
		method: 'delete',
	});
}

export function addExam(data) {
	return request({
		url: '/api/exams/single-exam/store',
		method: 'post',
		data,
	});
}

export function editExam(id, data) {
	return request({
		url: `/api/exams/single-exam/${id}/update`,
		method: 'put',
		data,
	});
}
export function fetchExam(id) {
	return request({
		url: `/api/exams/single-exam/${id}/edit`,
		method: 'get',
	});
}
