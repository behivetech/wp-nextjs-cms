import React from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import * as blocks from 'components/blocks';
import Button from 'components/core/Button';
import Drawer from 'components/core/Drawer';

import styles from './CMSPageLayoutTools.module.scss';

interface ICMSPageLayoutToolsProps {
    children: React.ReactNode;
}

const CMSPageLayoutTools: React.FunctionComponent<ICMSPageLayoutToolsProps> = ({
    children,
}: ICMSPageLayoutToolsProps) => {
    const {
        editBlock,
        layoutDrawerDetails,
        toggleEditBlock,
        toggleEditPage,
    } = useCMSPageProvider();
    const [rootClassName, getChildClass] = getClassName({
        rootClass: 'cms-page-layout-tools',
        styles,
    });

    // eslint-disable-next-line
    return (
        <>
            {children}
            <Button className={getChildClass('button')} onClick={toggleEditPage}>
                E
            </Button>
            <Drawer open={editBlock} handleClose={() => toggleEditBlock(false)}>
                {layoutDrawerDetails}
            </Drawer>
        </>
    );
};

export default CMSPageLayoutTools;
