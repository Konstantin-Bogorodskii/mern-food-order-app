import axios from 'axios';
import { BASE_URL } from '@shared/api/config';

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});
