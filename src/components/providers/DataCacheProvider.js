import * as React from 'react';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';

export const queryClient = new QueryClient();

export default function DataCacheProvider({children}) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
