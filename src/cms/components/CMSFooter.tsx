import React from 'react';

import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import * as blocks from 'components/blocks';

const CMSFooter: React.FunctionComponent<any> = (props) => {
    const {pageData} = useCMSPageProvider();
    const componentName = pageData?.footer?.componentName;

    // eslint-disable-next-line
    const DynamicBlock = blocks[componentName];

    return <DynamicBlock {...props} />;
};

export default CMSFooter;
