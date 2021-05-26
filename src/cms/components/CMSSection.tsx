import React from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import Headline from 'components/core/Headline';
import CMSBlock from 'cms/components/CMSBlock';

import styles from './CMSSection.module.scss';

interface ICMSSectionProps {
    className?: string;
    edit?: boolean;
    headlineLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headlineVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    name: string;
    sectionKey: string;
    title: string;
    titleVisible?: boolean;
}

// TODO: Pull the blockData from context

const CMSSection: React.FunctionComponent<ICMSSectionProps> = ({
    sectionKey,
    edit = false,
    className,
    headlineLevel,
    headlineVariant,
    name,
    title,
    titleVisible,
}: ICMSSectionProps) => {
    const {getSection} = useCMSPageProvider();
    const [rootClassName, getChildClass] = getClassName({
        className,
        modifiers: {
            edit,
        },
        rootClass: 'cms-section',
        styles,
    });
    const blockData = getSection(sectionKey).blocks || [];

    return (
        <section key={name} className={rootClassName}>
            <Headline
                level={headlineLevel}
                variant={headlineVariant}
                hidden={titleVisible}
            >
                {title}
            </Headline>
            {blockData.map(({blockId, componentName}) => (
                <CMSBlock key={blockId} blockId={blockId} componentName={componentName} />
            ))}
            {edit && <div className={getChildClass('name')}>{name}</div>}
        </section>
    );
};

export default CMSSection;
