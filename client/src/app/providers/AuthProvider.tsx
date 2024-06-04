import { FC, ReactNode } from 'react';
import { Auth0Provider, AppState, User } from '@auth0/auth0-react';
import { useCreateUser } from '@features/user/api';

interface Props {
	children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }: Props) => {
	const { createUser } = useCreateUser();

	const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	if (!DOMAIN || !CLIENT_ID || !REDIRECT_URI) {
		throw new Error('Unable to initialize auth');
	}

	const onRedirectCallback = (AppState?: AppState, user?: User) => {
		if (user?.sub && user?.email) {
			createUser({
				authId: user.sub,
				email: user.email
			});
		}
	};

	return (
		<Auth0Provider
			domain={DOMAIN}
			clientId={CLIENT_ID}
			authorizationParams={{
				redirect_uri: REDIRECT_URI
			}}
			onRedirectCallback={onRedirectCallback}>
			{children}
		</Auth0Provider>
	);
};
