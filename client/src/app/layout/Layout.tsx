import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

interface Props {}

export const Layout: React.FC<Props> = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="container mx-auto flex-1 py-10">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};
