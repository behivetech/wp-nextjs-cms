import React from 'react';

import * as blocks from 'components/blocks';

interface ICMSDynamicComponentProps {
    componentName: string;
    [key: string]: any;
}

const CMSDynamicComponent: React.FunctionComponent<ICMSDynamicComponentProps> = ({
    componentName,
    ...restProps
}: ICMSDynamicComponentProps) => {
    const DynamicBlock = blocks[componentName];

    return DynamicBlock ? <DynamicBlock {...restProps} /> : null;
};

export default CMSDynamicComponent;
