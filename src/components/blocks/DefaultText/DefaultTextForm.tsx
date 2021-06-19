import React from 'react';

import getClassName from 'tools/getClassName';
import {useCMSPageProvider} from 'cms/components/CMSPageProvider';

import FormGenerator, {IFieldParams} from 'components/core/FormGenerator';

export interface IDefaultTextFormProps {
    areaName: string;
    className?: string;
    data?: {[key: string]: any};
    index: number;
    onSubmit: (data: {[key: string]: any}) => void;
}

const DefaultTextForm: React.FunctionComponent<IDefaultTextFormProps> = ({
    areaName,
    className,
    data,
    index,
    onSubmit,
}: IDefaultTextFormProps) => {
    const {updateBlockData} = useCMSPageProvider();
    const [rootClassName] = getClassName({
        className,
        rootClass: 'default-text-form',
    });
    const fields: IFieldParams[] = [
        {
            label: 'Text Field',
            name: 'text',
            defaultValue: data?.text,
        },
    ];

    return (
        <FormGenerator
            className={rootClassName}
            fields={fields}
            onDark
            onSubmit={onSubmit}
        />
    );
};

export default DefaultTextForm;
