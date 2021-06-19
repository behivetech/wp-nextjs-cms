import React from 'react';

import * as blocks from 'components/blocks';

interface ICMSDynamicBlockProps {
    componentName: string;
    [key: string]: any;
}
const CMSDynamicBlock: React.FunctionComponent<ICMSDynamicBlockProps> = ({
    componentName,
    ...restProps
}: ICMSDynamicBlockProps) => {
    // eslint-disable-next-line
    const DynamicBlock = blocks[componentName];

    DynamicBlock.displayName = componentName;
    return DynamicBlock ? <DynamicBlock {...restProps} /> : null;
};

export default CMSDynamicBlock;
