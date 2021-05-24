import React from 'react';

import getClassName from 'tools/getClassName';

import Section from 'cms/components/Section';
import {useCmsPageProvider} from 'cms/components/CmsPageProvider';
import styles from './TwoColumn.module.scss';

interface TwoColumnProps {
    className?: string;
}

export default function TwoColumn({className}) {
    const {
        pageData: {areas},
    } = useCmsPageProvider();
    const [rootClassName] = getClassName({
        className,
        rootClass: 'two-column',
        styles,
    });

    return (
        <div className={rootClassName}>
            <Section
                headlineLevel='h2'
                name="Left Column"
                sectionKey="twoColumnLeft"
                title="Left Column"
            />
            <Section
                headlineLevel='h2'
                name="Right Column"
                sectionKey="twoColumnRight"
                title="Right Column"
            />
        </div>
    );
}
