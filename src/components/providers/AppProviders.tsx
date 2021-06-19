import React from 'react';
import DataCacheProvider from './DataCacheProvider';
import CMSPageProvider, {IPageData} from 'cms/components/CMSPageProvider';
import DataClientProvider from './DataClientProvider';

interface IAppProvidersProps {
    children: React.ReactNode;
    pageProps: {pageData: IPageData};
}

const AppProviders = ({children, pageProps}: IAppProvidersProps) => (
    <DataCacheProvider>
        <DataClientProvider>
            <CMSPageProvider pageData={pageProps.pageData}>{children}</CMSPageProvider>
        </DataClientProvider>
    </DataCacheProvider>
);

export default AppProviders;
