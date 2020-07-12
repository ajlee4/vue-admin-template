import request from '@/utils/request';

export function downloadPdf(id) {
	return request({
		url: `/api/records/generate-pdf`,
		method: 'get',
		params: { id },
	});
}

export function openPdf(id) {
	return request({
		url: `/api/records/open-pdf`,
		method: 'get',
		params: { id },
	});
}
