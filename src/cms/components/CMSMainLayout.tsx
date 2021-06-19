import React from 'react';

import {useCMSPageProvider} from './CMSPageProvider';

import * as mainLayouts from 'components/main-layouts';

const CMSMainLayout: React.FunctionComponent<any> = () => {
    const {pageData} = useCMSPageProvider();
    const componentName = pageData.mainLayout.componentName;
    // eslint-disable-next-line
    const DynamicBlock = mainLayouts[componentName];

    return <DynamicBlock />;
};

export default CMSMainLayout;
