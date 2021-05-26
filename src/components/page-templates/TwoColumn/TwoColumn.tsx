import React from 'react';

import getClassName from 'tools/getClassName';

import CMSArea from 'cms/components/CMSArea';
import CMSLayout from 'cms/components/CMSLayout';
import styles from './TwoColumn.module.scss';

interface TwoColumnProps {
    className?: string;
}

export default function TwoColumn({className}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'two-column',
        styles,
    });

    // return <div>working two column</div>;
    return (
        <CMSLayout>
            <div className={getChildClass('columns')}>
                <div>
                    <CMSArea name="mainLeft" />
                </div>
                <div>
                    <CMSArea name="mainRight" />
                </div>
            </div>
        </CMSLayout>
    );
}
