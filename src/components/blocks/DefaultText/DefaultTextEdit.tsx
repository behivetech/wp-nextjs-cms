import React from 'react';

import getClassName from 'tools/getClassName';

import DefaultTextForm from './DefaultTextForm';

interface IDefaultTextEditProps {
    className?: string;
    [key: string]: any;
}

const DefaultTextEdit: React.FunctionComponent<IDefaultTextEditProps> = ({
    className,
    ...restProps
}: IDefaultTextEditProps) => {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'default-text-edit',
    });

    return <DefaultTextForm {...restProps} className={rootClassName} />;
};

export default DefaultTextEdit;
