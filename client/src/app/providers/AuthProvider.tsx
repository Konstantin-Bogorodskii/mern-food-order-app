import { Auth0Provider, AppState, User } from '@auth0/auth0-react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AUTH_CALLBACK_PATH } from '@shared/constants';

export const AuthProvider: React.FC = () => {
	const navigate = useNavigate();

	const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	if (!DOMAIN || !CLIENT_ID || !REDIRECT_URI) {
		throw new Error('Unable to initialize auth');
	}

	const onRedirectCallback = (AppState?: AppState, user?: User) => {
		console.log('user ==>', user);
		console.log('AppState ==>', AppState);
		navigate(AUTH_CALLBACK_PATH);
	};

	return (
		<Auth0Provider
			domain={DOMAIN}
			clientId={CLIENT_ID}
			authorizationParams={{
				redirect_uri: REDIRECT_URI
			}}
			onRedirectCallback={onRedirectCallback}>
			<Outlet />
		</Auth0Provider>
	);
};
