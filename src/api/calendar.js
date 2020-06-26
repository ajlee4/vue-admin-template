import request from '@/utils/request';

export function editUserInfo(id, data) {
	return request({
		url: `/api/records/${id}/update`,
		method: 'put',
		data,
	});
}

export function editRecord(data) {
	return request({
		url: `/api/record-deps/store-deps`,
		method: 'post',
		data,
	});
}
export function addRecord(data) {
	return request({
		url: `/api/records/add-record`,
		method: 'post',
		data,
	});
}

export function disableRecord(data) {
	return request({
		url: `/api/record-deps/destroy-deps`,
		method: 'get',
		params: data,
	});
}

export function getCategoryRecords(data) {
	return request({
		url: `/api/records/all-records`,
		method: 'get',
		params: data,
	});
}

export function getOffices(data) {
	return request({
		url: `/api/records/all-offices`,
		method: 'get',
		params: data,
	});
}
export function getCategory(data) {
	return request({
		url: `/api/records/all-categories`,
		method: 'get',
		params: data,
	});
}

export function deleteRecord(id) {
	return request({
		url: `/api/record-deps/${id}/destroy-single-deps`,
		method: 'delete',
	});
}
export function updateRecord(id, data) {
	return request({
		url: `/api/record-deps/${id}/update-single-deps`,
		method: 'put',
		data,
	});
}
export function deleteSingleRecord(id) {
	return request({
		url: `/api/records/${id}/destroy`,
		method: 'delete',
	});
}
