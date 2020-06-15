import request from '@/utils/request';

export function fetchTeachersList(query) {
	return request({
		url: '/api/lecturers',
		method: 'get',
		params: query,
	});
}

export function deleteTeacherInfo(id) {
	return request({
		url: `/api/lecturers/${id}/destroy`,
		method: 'delete',
		params: { id },
	});
}
export function createTeacher(data) {
	return request({
		url: '/api/lecturers/store',
		method: 'post',
		data,
	});
}

export function fetchTeacher(id) {
	return request({
		url: `/api/lecturers/${id}/edit`,
		method: 'get',
	});
}

export function fetchTeacherAvatar(id) {
	return request({
		url: `/api/lecturers/${id}/edit`,
		method: 'get',
	});
}

export function updateTeacher(id, data) {
	return request({
		url: `/api/lecturers/${id}/update`,
		method: 'put',
		data,
	});
}
