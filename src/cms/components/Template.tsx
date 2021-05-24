import React from 'react';
import dynamic from 'next/dynamic'

import * as templates from 'components/templates';

interface ITemplateProps {
    edit?: boolean;
    componentName: string;
}

export default function Template({edit, componentName}: ITemplateProps) {
    // TODO: query for the current template name from WP db
    const DynamicTemplate = templates[componentName];

    return <DynamicTemplate />;
}
