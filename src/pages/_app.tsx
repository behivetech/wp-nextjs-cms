import React from 'react';

import AppProviders from 'components/providers/AppProviders';

import 'styles/index.scss';

export interface IPageProps {
    [key: string]: any;
}

interface IAppProps {
    Component: React.ComponentType<IPageProps>;
    pageProps: IPageProps;
}

const App: React.FunctionComponent<IAppProps> = ({Component, pageProps}: IAppProps) => (
    <AppProviders pageProps={pageProps}>
        <Component {...pageProps} />
    </AppProviders>
);

export default App;
