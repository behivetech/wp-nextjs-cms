import React from 'react';
import dynamic from 'next/dynamic'

interface IBlockProps{
    blockKey: string;
}
export default function Block({blockKey}: IBlockProps) {
    // TODO: query for the current template name from WP db
    const DynamicBlock = dynamic(() => import(`blocks/${blockKey}`));

    return <DynamicBlock />;
}
