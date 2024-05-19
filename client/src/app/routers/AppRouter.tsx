import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@app/layout';

import { HomePage } from '@pages/homePage';
import { NotFoundPage } from '@pages/notFoundPage';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomePage />
				}
			]
		},
		{
			path: '*',
			element: <NotFoundPage />
		}
	]);

	return <RouterProvider router={router} />;
};
