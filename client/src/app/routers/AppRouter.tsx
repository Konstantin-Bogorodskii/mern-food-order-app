import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@app/layout';

import { HomePage } from '@pages/homePage';

import { Fallback } from '@shared/ui/fallback';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout showHero />,
			errorElement: <Fallback />,
			children: [
				{
					index: true,
					element: <HomePage />
				}
			]
		}
	]);

	return <RouterProvider router={router} />;
};
