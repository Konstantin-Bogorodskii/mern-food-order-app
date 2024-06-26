import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '@shared/ui/fallback';
import { QueryClientProvider } from '@app/providers/QueryClientProvider';

interface Props {
	readonly children: JSX.Element;
}

export const Providers: React.FC<Props> = ({ children }) => {
	return (
		<ErrorBoundary FallbackComponent={Fallback}>
			<QueryClientProvider>{children}</QueryClientProvider>
		</ErrorBoundary>
	);
};
