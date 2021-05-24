import React from 'react';
import dynamic from 'next/dynamic'

import * as blocks from 'components/blocks';
import getClassName from 'tools/getClassName';
import styles from './Section.module.scss';
import {useCmsPageProvider} from 'cms/components/CmsPageProvider';

import Headline from 'components/core/Headline';

interface ISectionProps {
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

export default function Section({
    sectionKey,
    edit = false,
    className,
    headlineLevel,
    headlineVariant,
    name,
    title,
    titleVisible,
}: ISectionProps) {
    const {getSection} = useCmsPageProvider();
    const [rootClassName, getChildClass] = getClassName({
        className,
        modifiers: {
            edit,
        },
        rootClass: 'section',
        styles,
    });
    const blockData = getSection(sectionKey).blocks || [];

    return (
        <section key={name} className={rootClassName}>
            <Headline level={headlineLevel} variant={headlineVariant} hidden={titleVisible}>{title}</Headline>
            {
                blockData.map(({blockId, blockComponent}) => {
                    const DynamicBlock = blocks[blockComponent];

                    return <DynamicBlock key={blockId} blockId={blockId} />;
                })
            }
            {edit && <div className={getChildClass('name')}>{name}</div>}
       </section>
   )
}
