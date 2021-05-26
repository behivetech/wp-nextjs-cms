import React from 'react';

interface IDefaultTextProps {
    blockId: string | number;
    data: {[key: string]: any};
    // className?: string;
}

const DefaultText: React.FunctionComponent<IDefaultTextProps> = ({
    blockId,
    data,
}: IDefaultTextProps) => (
    <div className="block-text">{data?.text ? data.text : 'No text available.'}</div>
);

export default DefaultText;
