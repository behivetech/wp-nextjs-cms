import React from 'react';

import getClassName from 'tools/getClassName';

import CMSArea from 'cms/components/CMSArea';

import styles from './DefaultLayout.module.scss';

interface IDefaultLayoutProps {
    children: React.ReactNode;
    className: string;
}

const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = ({
    children,
    className,
}: IDefaultLayoutProps) => {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'default-layout',
        styles,
    });

    return (
        <div className={rootClassName}>
            <CMSArea name="header" className={getChildClass('header')} />
            <main className={getChildClass('main')}>{children}</main>
            <CMSArea name="footer" className={getChildClass('footer')} />
        </div>
    );
};

export default DefaultLayout;
