import React from 'react';

import getClassName from 'tools/getClassName';

import DefaultTextForm from './DefaultTextForm';

interface IDefaultTextAddProps {
    className?: string;
}

const DefaultTextAdd: React.FunctionComponent<IDefaultTextAddProps> = ({
    className,
    ...restProps
}: IDefaultTextAddProps) => {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'default-text-add',
    });

    return <DefaultTextForm {...restProps} className={rootClassName} />;
};

export default DefaultTextAdd;
