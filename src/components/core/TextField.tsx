import React, {useRef} from 'react';

import getClassName from 'tools/getClassName';

import FieldError from 'components/core/FieldError';

import styles from './TextField.module.scss';

export type ITextFieldProps = {
    className?: string;
    defaultValue?: string;
    fieldError?: {[key: string]: any};
    inputProps?: React.ReactHTMLElement<HTMLInputElement> &
        React.ReactHTMLElement<HTMLTextAreaElement>;
    label?: React.ReactNode;
    name: string;
    onDark?: boolean;
    textarea?: boolean;
};

const TextField = React.forwardRef(
    (
        {
            className,
            defaultValue = '',
            fieldError = '',
            inputProps,
            label = '',
            name,
            onDark = false,
            textarea = false,
        }: ITextFieldProps,
        ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const [rootClassName, getChildClass] = getClassName({
            className,
            modifiers: {'on-dark': onDark},
            rootClass: 'text-field',
            styles,
        });
        const InputComponent = textarea ? 'textarea' : 'input';

        return (
            <div className={rootClassName}>
                {label && (
                    <label className={getChildClass('label')} htmlFor={name}>
                        {label}
                    </label>
                )}
                <InputComponent
                    className={getChildClass('input')}
                    defaultValue={defaultValue}
                    id={name}
                    name={name}
                    ref={ref}
                    {...inputProps}
                />
                <FieldError error={fieldError} />
            </div>
        );
    }
);

export default TextField;
