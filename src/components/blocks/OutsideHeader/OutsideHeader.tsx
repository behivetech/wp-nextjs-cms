import React from 'react';

import getClassName from 'tools/getClassName';

import Headline from 'components/core/Headline';

import styles from './OutsideHeader.module.scss';

type ILinks = {
    href: string;
    linkChild: string;
};

interface IOutsideHeaderProps {
    className?: string;
    data?: {links: ILinks[]};
}

const OutsideHeader: React.FunctionComponent<IOutsideHeaderProps> = ({
    className,
    data,
}: IOutsideHeaderProps) => {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'outside-header',
        styles,
    });

    return (
        <header className={rootClassName}>
            <section className={getChildClass('section')}>
                <Headline className={getChildClass('logo')} level="h1">
                    Outside
                </Headline>
                <ul className={getChildClass('ul')}>
                    {data.links.map(({href, linkChild}) => (
                        <li className={getChildClass('li')}>
                            <a
                                className={getChildClass('nav-link')}
                                href={href}
                                target="_blank"
                            >
                                {linkChild}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </header>
    );
};

export default OutsideHeader;
