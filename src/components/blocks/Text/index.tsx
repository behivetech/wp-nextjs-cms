import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './indext.module.scss';

interface indextProps {
    // className?: string;
}

export default function index({blockId}) {
    return (
        <div className="block-text">Text Block</div>
    );
}
