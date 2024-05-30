import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { Hero } from '@/widgets/hero';

interface Props {
	showHero?: boolean;
}

export const Layout: React.FC<Props> = ({ showHero }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{showHero && <Hero />}

			<main className="container mx-auto flex-1 py-10">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};
