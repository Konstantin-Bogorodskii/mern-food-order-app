import { Link } from 'react-router-dom';
import { Button } from '@shared/ui/button';
import { useAuth0 } from '@auth0/auth0-react';

export const MainNav: React.FC = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		<span className="flex space-x-2 items-center">
			{isAuthenticated ? (
				<>
					<Link
						to="/order-status"
						className="font-bold hover:text-orange-500">
						Order Status
					</Link>
					{/* <UsernameMenu /> */}
				</>
			) : (
				<Button
					variant="ghost"
					className="font-bold hover:text-orange-500 hover:bg-white"
					onClick={async () => await loginWithRedirect()}>
					Log In
				</Button>
			)}
		</span>
	);
};
