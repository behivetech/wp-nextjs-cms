import React from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import CMSDynamicBlock from './CMSDynamicBlock';

import CMSBlocksList from './CMSBlocksList';
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';
import styles from './CMSArea.module.scss';

interface ICMSAreaProps {
    className?: string;
    name: string;
}

const CMSArea: React.FunctionComponent<ICMSAreaProps> = ({
    className,
    name,
}: ICMSAreaProps) => {
    const {
        editBlock,
        editPage,
        pageData: {areas},
        removeBlock,
        toggleEditBlock,
        toggleEditPage,
        setLayoutDrawerDetails,
        updateBlockData,
    } = useCMSPageProvider();
    const [rootClassName, getChildClass] = getClassName({
        rootClass: 'cms-area',
        styles,
    });
    const blockData = areas[name] ? areas[name].blocks : [];
    const blocks = blockData.map(({componentName, ...restData}, index) => {
        const dynamicComponent = (
            <CMSDynamicBlock
                className={className}
                componentName={componentName}
                {...restData}
                key={`${name}__${componentName}--${index}`}
            />
        );

        return editPage ? (
            <div
                key={`${name}-${componentName}-edit__${index}`}
                className={getChildClass('block')}
            >
                {dynamicComponent}
                <Button
                    className={getChildClass('button-block')}
                    disabled={editBlock}
                    onClick={handleEditBlock({...restData, componentName, index})}
                >
                    Edit Block
                </Button>
            </div>
        ) : (
            dynamicComponent
        );
    });

    function handleAddBlock() {
        setLayoutDrawerDetails(<CMSBlocksList areaName={name} />);
        toggleEditBlock();
    }

    function handleSubmit(index) {
        return (data) => {
            updateBlockData(name, index, data);
        };
    }

    function handleEditBlock({componentName, index, ...restData}) {
        return () => {
            const details = (
                <section>
                    <Headline level="h2" variant="h3">
                        Update / Add / Remove Block
                    </Headline>
                    <Button onClick={() => removeBlock(name, index)}>Remove Block</Button>
                    <CMSDynamicBlock
                        {...restData}
                        componentName={`${componentName}Edit`}
                        areaName={name}
                        index={index}
                        onSubmit={handleSubmit(index)}
                    />
                </section>
            );

            setLayoutDrawerDetails(details);
            toggleEditBlock();
        };
    }

    return editPage ? (
        <div className={rootClassName}>
            {blocks}
            <Button
                disabled={editBlock}
                className={getChildClass('button-area')}
                onClick={handleAddBlock}
            >
                Add Block
            </Button>
            <div className={getChildClass('name')}>{name}</div>
        </div>
    ) : (
        <>{blocks}</>
    );
};

export default CMSArea;
