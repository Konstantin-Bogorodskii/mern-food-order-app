import {
	createBrowserRouter,
	createRoutesFromElements,
	// Link,
	Route,
	RouterProvider
} from 'react-router-dom';

import { HomePage } from '@pages/homePage';

export const AppRouter = () => {
	const routes = createRoutesFromElements(
		<Route
			path="/"
			element={<HomePage />}
			// errorElement={<Fallback />}
		></Route>
	);

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};
