import React from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import * as blocks from 'components/blocks';
import Button from 'components/core/Button';
import Drawer from 'components/core/Drawer';

import styles from './CMSLayout.module.scss';

const CMSLayout: React.FunctionComponent<any> = (props) => {
    const {
        editBlock,
        layoutDrawerDetails,
        pageData,
        toggleEditBlock,
        toggleEditPage,
    } = useCMSPageProvider();
    const {componentName, ...layoutData} = pageData?.layout;
    const [rootClassName, getChildClass] = getClassName({
        rootClass: 'cms-layout',
        styles,
    });

    // eslint-disable-next-line
    const DynamicBlock = blocks[componentName];
    return (
        <>
            <DynamicBlock {...props} {...layoutData} />
            <Button className={getChildClass('button')} onClick={toggleEditPage}>
                E
            </Button>
            <Drawer open={editBlock} handleClose={() => toggleEditBlock(false)}>
                {layoutDrawerDetails}
            </Drawer>
        </>
    );
};

export default CMSLayout;
