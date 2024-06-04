import { CreateUserQuery } from '@entities/user/model/query/user.query';
import { apiClient } from '@shared/api/apiClient';

export const createUserRequest = async (user: CreateUserQuery) => {
	try {
		const response = await apiClient.post('user', { user });
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};
