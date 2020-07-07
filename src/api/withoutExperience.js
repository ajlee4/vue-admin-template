import request from '@/utils/request';

export function fetchWithoutExperienceList(query) {
	return request({
		url: '/api/without-experience/',
		method: 'get',
		params: query,
	});
}

export function deleteWithoutExperience(id) {
	return request({
		url: `/api/without-experience/${id}/destroy`,
		method: 'delete',
		params: { id },
	});
}

export function fetchWithoutExperience(id) {
	return request({
		url: `/api/without-experience/${id}/edit`,
		method: 'get',
	});
}

export function updateWithoutExperience(id, data) {
	return request({
		url: `/api/without-experience/${id}/update`,
		method: 'put',
		data,
	});
}
export function createWithoutExperience(data) {
	return request({
		url: '/api/without-experience/store',
		method: 'post',
		data,
	});
}
