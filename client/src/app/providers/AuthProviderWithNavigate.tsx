import { FC, ReactNode } from 'react';
import { Auth0Provider, AppState, User } from '@auth0/auth0-react';

interface Props {
	children: ReactNode;
}

export const AuthProviderWithNavigate: FC<Props> = ({ children }: Props) => {
	const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	if (!DOMAIN || !CLIENT_ID || !REDIRECT_URI) {
		throw new Error('Unable to initialize auth');
	}

	const onRedirectCallback = (AppState?: AppState, user?: User) => {
		console.log('AppState ==>', AppState);
		console.log('user ==>', user);
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
