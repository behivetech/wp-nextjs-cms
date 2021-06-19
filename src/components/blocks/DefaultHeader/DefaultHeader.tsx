import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './DefaultHeader.module.scss';

interface IDefaultHeaderProps {
    className?: string;
}

const DefaultHeader: React.FunctionComponent<IDefaultHeaderProps> = ({
    className,
}: IDefaultHeaderProps) => {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'default-header',
        styles,
    });

    return <header className={rootClassName}>Header</header>;
};

export default DefaultHeader;
