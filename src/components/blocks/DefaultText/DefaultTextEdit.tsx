import React from 'react';

import getClassName from 'tools/getClassName';

import DefaultTextForm, {IDefaultTextFormProps} from './DefaultTextForm';

type IDefaultTextEditProps = {
    className?: string;
} & IDefaultTextFormProps;

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
