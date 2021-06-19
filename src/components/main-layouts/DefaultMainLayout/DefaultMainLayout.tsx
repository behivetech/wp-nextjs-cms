import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './DefaultMainLayout.module.scss';

interface DefaultMainLayoutProps {
    className?: string;
}

export default function DefaultMainLayout({className}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'default-main-layout',
        styles,
    });

    return <div className={rootClassName}>Default Main Layout</div>;
}
