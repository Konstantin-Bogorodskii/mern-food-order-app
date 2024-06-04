import { useMutation } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { apiClient } from '@shared/api/apiClient';
import { CreateUserQuery } from '@features/user/model';

export const useCreateUser = () => {
	const { getAccessTokenSilently } = useAuth0();

	const createUserRequest = async (user: CreateUserQuery) => {
		try {
			const accessToken = await getAccessTokenSilently();
			const response = await apiClient.post(
				'user',
				{ user },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

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
