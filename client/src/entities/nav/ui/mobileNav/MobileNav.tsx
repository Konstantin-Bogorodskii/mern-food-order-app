import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '@shared/ui/sheet';
import { Separator } from '@shared/ui/separator';
import { Button } from '@shared/ui/button';

export const MobileNav: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-orange-500" />
			</SheetTrigger>
			<SheetContent className="space-y-3">
				<SheetTitle>
					{/* {isAuthenticated ? (
						<span className="flex items-center font-bold gap-2">
							<CircleUserRound className="text-orange-500" />
							{user?.email}
						</span>
					) : (
						<span> Welcome to MernEats.com!</span>
					)} */}
					<span> Welcome to MernEats.com!</span>
				</SheetTitle>
				<Separator />
				<SheetDescription className="flex flex-col gap-4">
					{/* {isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button
							onClick={() => loginWithRedirect()}
							className="flex-1 font-bold bg-orange-500">
							Log In
						</Button>
					)} */}

					<Button
						// onClick={() => loginWithRedirect()}
						className="flex-1 font-bold bg-orange-500">
						Log In
					</Button>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};
