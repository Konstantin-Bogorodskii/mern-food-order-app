import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '@shared/ui/fallback';
import { AuthProviderWithNavigate } from '@app/auth';

interface Props {
	readonly children: JSX.Element;
}

export const Providers: React.FC<Props> = ({ children }) => {
	return (
		<ErrorBoundary FallbackComponent={Fallback}>
			<AuthProviderWithNavigate>{children}</AuthProviderWithNavigate>
		</ErrorBoundary>
	);
};
