import request from '@/utils/request';

export function fetchAllRecordsList(query) {
	return request({
		url: '/api/records/all-records-list',
		method: 'get',
		params: query,
	});
}

export function deleteAllRecords(id) {
	return request({
		url: `/api/records/all-records-list${id}/destroy`,
		method: 'delete',
		params: { id },
	});
}

export function fetchAllRecords(id) {
	return request({
		url: `/api/records/${id}/edit`,
		method: 'get',
	});
}

export function updateAllRecords(id, data) {
	return request({
		url: `/api/records/${id}/update`,
		method: 'put',
		data,
	});
}
export function createAllRecords(data) {
	return request({
		url: '/api/records/all-records-list/store',
		method: 'post',
		data,
	});
}
