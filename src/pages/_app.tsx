import React from 'react';

import AppProviders from 'components/providers/AppProviders';
import {IPageData} from 'cms/components/CMSPageProvider';

import 'styles/index.scss';

interface IAppProps {
    Component: React.ComponentType<IPageData>;
    pageProps: {pageData: IPageData};
}

const App: React.FunctionComponent<IAppProps> = ({Component, pageProps}: IAppProps) => (
    <AppProviders pageProps={pageProps}>
        <Component {...pageProps} />
    </AppProviders>
);

export default App;
