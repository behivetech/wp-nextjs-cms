import React from 'react';

import getClassName from 'tools/getClassName';

import styles from './Button.module.scss';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<IButtonProps> = ({
    className,
    children,
    ...restProps
}: IButtonProps) => {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'button',
        styles,
    });

    return (
        <button className={rootClassName} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
