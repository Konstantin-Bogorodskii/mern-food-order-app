import { useMutation } from '@tanstack/react-query';
import { createUserRequest } from '@entities/user/api';

export const useCreateUser = () => {
	const {
		mutateAsync: createUser,
		isPending,
		isError,
		isSuccess
	} = useMutation({
		mutationFn: createUserRequest
	});

	return {
		createUser,
		isPending,
		isError,
		isSuccess
	};
};
