import * as React from 'react';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';

interface IDataClientProviderProps {
    children: React.ReactNode;
}

export const queryClient = new QueryClient();

export default function DataCacheProvider({children}: IDataClientProviderProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
