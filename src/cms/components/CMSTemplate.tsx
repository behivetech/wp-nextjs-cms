import React from 'react';

import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import * as pageTemplates from 'components/page-templates';

const CMSTemplate: React.FunctionComponent<any> = (props) => {
    const {pageData} = useCMSPageProvider();
    const componentName = pageData?.pageTemplate?.componentName;

    // eslint-disable-next-line
    const DynamicBlock = pageTemplates[componentName];
    return <DynamicBlock {...props} />;
};

export default CMSTemplate;
