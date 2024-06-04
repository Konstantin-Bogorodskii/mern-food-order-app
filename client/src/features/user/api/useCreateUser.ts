import { useMutation } from '@tanstack/react-query';
import { createUserRequest } from '@entities/user/api';

export const useCreateUser = () =>
	useMutation({
		mutationFn: createUserRequest
	});
