import React, {useState} from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import * as blocks from 'components/blocks';
import CMSDynamicComponent from './CMSDynamicComponent';
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';

import styles from './CMSBlocksList.module.scss';

interface ICMSBlocksListProps {
    areaName: string;
    className?: string;
}

const CMSBlocksList: React.FunctionComponent<ICMSBlocksListProps> = ({
    areaName,
    className,
}: ICMSBlocksListProps) => {
    const [currentComponentName, setCurrentFormName] = useState<undefined | string>(null);
    const {addBlock} = useCMSPageProvider();
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'cms-blocks-list',
        styles,
    });
    const blockKeys = Object.keys(blocks);
    const selectList = blockKeys.filter(
        (blockName) => !(blockName.includes('Add') || blockName.includes('Edit'))
    );

    function hasFormComponent() {
        return blockKeys.includes(`${currentComponentName}Add`);
    }

    function handleChange(event) {
        const value = event?.target?.value;

        setCurrentFormName(value);
    }

    function handleSubmit(data) {
        debugger;
        addBlock(areaName, currentComponentName, data);
    }

    function handleAddClick() {
        debugger;
        addBlock(areaName, currentComponentName, {});
    }

    return (
        <section className={rootClassName}>
            <Headline level="h2" variant="h3">
                Add A Component
            </Headline>
            <select className={getChildClass('select')} onChange={handleChange}>
                <option>--- Select a Component ---</option>
                {selectList.map((blockName, index) => (
                    <option key={`${blockName}__${index}`} value={blockName}>
                        {blockName}
                    </option>
                ))}
            </select>
            {hasFormComponent() && (
                <CMSDynamicComponent
                    componentName={`${currentComponentName}Add`}
                    onSubmit={handleSubmit}
                />
            )}
            {!hasFormComponent() && currentComponentName && (
                <Button onClick={handleAddClick} className={getChildClass('button-add')}>
                    Add Component
                </Button>
            )}
        </section>
    );
};

export default CMSBlocksList;
