import axios from 'axios';
import { Message } from 'element-ui';
import { API_URL } from '@/config';
// create an axios instance
const service = axios.create({
	baseURL: API_URL,
	timeout: 65000,
});

service.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	},
);

// response interceptor
service.interceptors.response.use(
	(response) => {
		const res = response.data;
		return res;
	},
	(error) => {
		console.log('err' + error);
		Message({
			message: error.message,
			type: 'error',
			showClose: true,
		});
		return Promise.reject(error);
	},
);

export default service;
