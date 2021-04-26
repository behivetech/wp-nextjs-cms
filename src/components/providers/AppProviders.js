import React from 'react';
import PropTypes from 'prop-types';
import DataCacheProvider from './DataCacheProvider';
import QueryClientProvider from './QueryClientProvider';

export default function AppProviders({children}) {
    return (
        <DataCacheProvider>
            <DataClientProvider>{children}</DataClientProvider>
        </DataCacheProvider>
    );
}

AppProviders.propTypes = {
    children: PropTypes.node,
};
