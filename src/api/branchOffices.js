import request from '@/utils/request';

export function fetchOfficesList(query) {
	return request({
		url: '/api/branch-offices',
		method: 'get',
		params: query,
	});
}

export function deleteOfficesInfo(id) {
	return request({
		url: `/api/branch-offices/${id}/destroy`,
		method: 'delete',
		params: { id },
	});
}
export function createOffices(data) {
	return request({
		url: '/api/branch-offices/store',
		method: 'post',
		data,
	});
}

export function fetchOffices(id) {
	return request({
		url: `/api/branch-offices/${id}/edit`,
		method: 'get',
	});
}

export function updateOffices(id, data) {
	return request({
		url: `/api/branch-offices/${id}/update`,
		method: 'put',
		data,
	});
}
