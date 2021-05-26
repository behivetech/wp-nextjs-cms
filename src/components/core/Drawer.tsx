import React from 'react';

import getClassName from 'tools/getClassName';

import Button from 'components/core/Button';

import styles from './Drawer.module.scss';

interface IDrawerProps {
    children: React.ReactNode;
    className?: string;
    handleClose?: () => void;
    open?: boolean;
}

const Drawer: React.FunctionComponent<IDrawerProps> = ({
    children,
    className,
    handleClose,
    open = false,
}: IDrawerProps) => {
    const [rootClassName, getChildClass] = getClassName({
        className,
        modifiers: {open},
        rootClass: 'drawer',
        styles,
    });

    return (
        <div className={rootClassName}>
            {children}
            <Button
                className={getChildClass('close')}
                onClick={handleClose}
                title="Close"
            >
                X
            </Button>
        </div>
    );
};

export default Drawer;
