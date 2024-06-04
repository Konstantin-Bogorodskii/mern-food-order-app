import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@app/providers';

import { Layout } from '@app/layout';

import { HomePage } from '@pages/homePage';
import { AuthCallbackPage } from '@pages/authCallbackPage';

import { Fallback } from '@shared/ui/fallback';

import { ROOT_PATH, AUTH_CALLBACK_PATH } from '@shared/constants';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			element: <AuthProvider />,
			children: [
				{
					path: ROOT_PATH,
					element: <Layout showHero />,
					errorElement: <Fallback />,
					children: [
						{
							index: true,
							element: <HomePage />
						}
					]
				},
				{
					path: AUTH_CALLBACK_PATH,
					element: <AuthCallbackPage />,
					errorElement: <Fallback />
				}
			]
		}
	]);

	return <RouterProvider router={router} />;
};
