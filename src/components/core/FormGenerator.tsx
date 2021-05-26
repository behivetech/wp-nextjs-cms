import React from 'react';
import {useForm, Controller} from 'react-hook-form';

import getClassName from 'tools/getClassName';

import TextField, {ITextFieldProps} from 'components/core/TextField';
import Button from 'components/core/Button';

import styles from './FormGenerator.module.scss';

export type IFieldParams = ITextFieldProps & {
    defaultValue?: number | string | boolean;
    name: string;
    rules?: {[key: string]: any};
};

interface IFormGeneratorProps {
    className?: string;
    fields: IFieldParams[];
    onSubmit?: (data: any) => void;
    onDark?: boolean;
}

const FormGenerator: React.FunctionComponent<IFormGeneratorProps> = ({
    className,
    fields,
    onSubmit = (data) => null,
    onDark = false,
}: IFormGeneratorProps) => {
    const {
        control,
        formState: {errors},
        handleSubmit,
        register,
        setValue,
    } = useForm();

    const [rootClassName] = getClassName({
        className,
        rootClass: 'form-generator',
        styles,
    });

    function onHandleSubmit(data) {
        debugger;
        onSubmit(data);
    }
    return (
        <form className={rootClassName} onSubmit={handleSubmit(onHandleSubmit)}>
            {fields.map(({name, defaultValue, rules = {}, ...fieldProps}) => {
                const textFieldProps = {
                    ...fieldProps,
                    onDark,
                };

                return (
                    <TextField
                        {...textFieldProps}
                        key={name}
                        fieldError={errors[name]}
                        name={name}
                        inputProps={{defaultValue}}
                        ref={register({required: true})}
                    />
                );
                {
                    /*                return (
                    <Controller
                        key={name}
                        name={name}
                        control={control}
                        rules={rules}
                        render={({field}) => (
                            <TextField
                                {...field}
                                {...textFieldProps}
                                name={name}
                                inputProps={{defaultValue}}
                            />
                        )}
                    />
                );
*/
                }
            })}
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default FormGenerator;
