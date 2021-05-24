import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './Headline.module.scss';

interface IHeadlineProps {
    children: React.ReactNode;
    className?: string;
    hidden?: boolean;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Headline({className, children, level, variant}: IHeadlineProps) {
    const [rootClassName] = getClassName({
        className,
        modifiers: {
            [variant || level]: true,
        },
        rootClass: 'headline',
        styles,
    });
    const Component = level;

    return (
        <Component className={rootClassName}>{children}</Component>
    );
}
