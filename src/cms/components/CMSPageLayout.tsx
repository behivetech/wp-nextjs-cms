import React from 'react';

import {useCMSPageProvider} from './CMSPageProvider';

import CMSPageLayoutTools from './CMSPageLayoutTools';
import * as pageLayouts from 'components/page-layouts';

const CMSPageLayout: React.FunctionComponent<any> = () => {
    const {pageData} = useCMSPageProvider();
    const componentName = pageData.pageLayout.componentName;
    // eslint-disable-next-line
    const DynamicBlock = pageLayouts[componentName];

    DynamicBlock.displayName = componentName;
    return (
        <CMSPageLayoutTools>
            <DynamicBlock />
        </CMSPageLayoutTools>
    );
};

export default CMSPageLayout;
