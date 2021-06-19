import React from 'react';

export interface IDefaultTextData {
    text: string;
}

interface IDefaultTextProps {
    blockId: string | number;
    data: IDefaultTextData;
    // className?: string;
}

const DefaultText: React.FunctionComponent<IDefaultTextProps> = ({
    blockId,
    data,
}: IDefaultTextProps) => (
    <div className="block-text">{data?.text ? data.text : 'No text available.'}</div>
);

export default DefaultText;
