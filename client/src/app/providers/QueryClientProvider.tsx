import { FC, ReactNode } from 'react';
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/api/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
	children: ReactNode;
}

export const QueryClientProvider: FC<Props> = ({ children }) => {
	return (
		<TanStackQueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</TanStackQueryClientProvider>
	);
};
