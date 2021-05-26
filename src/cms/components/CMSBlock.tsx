import React from 'react';

import * as blocks from 'components/blocks';

interface ICMSBlockProps {
    blockId: string;
    componentName: string;
    [key: string]: any;
}
const CMSBlock: React.FunctionComponent<ICMSBlockProps> = ({
    componentName,
    blockId,
    ...restProps
}: ICMSBlockProps) => {
    // eslint-disable-next-line
    const DynamicBlock = blocks[componentName];

    return <DynamicBlock key={blockId} {...restProps} />;
};

export default CMSBlock;
