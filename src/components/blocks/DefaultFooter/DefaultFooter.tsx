import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './DefaultFooter.module.scss';

interface IDefaultFooterProps {
    className?: string;
}

const DefaultFooter: React.FunctionComponent<IDefaultFooterProps> = ({
    className,
}: IDefaultFooterProps) => {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'default-footer',
        styles,
    });

    return <footer className={rootClassName}>Footer</footer>;
};

export default DefaultFooter;
