import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from '@pages/homePage';
import { NotFoundPage } from '@pages/notFoundPage';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />
		},
		{
			path: '*',
			element: <NotFoundPage />
		}
	]);

	return <RouterProvider router={router} />;
};
