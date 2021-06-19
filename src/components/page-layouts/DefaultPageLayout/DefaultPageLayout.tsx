import React from 'react';

import getClassName from 'tools/getClassName';

import CMSArea from 'cms/components/CMSArea';
import CMSMainLayout from 'cms/components/CMSMainLayout';

import styles from './DefaultPageLayout.module.scss';

interface IDefaultPageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const DefaultPageLayout: React.FunctionComponent<IDefaultPageLayoutProps> = ({
    children,
    className,
}: IDefaultPageLayoutProps) => {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'default-page-layout',
        styles,
    });

    return (
        <div className={rootClassName}>
            <CMSArea name="header" className={getChildClass('header')} />
            <main className={getChildClass('main')}>
                <CMSMainLayout />
            </main>
            <CMSArea name="footer" className={getChildClass('footer')} />
        </div>
    );
};

export default DefaultPageLayout;
