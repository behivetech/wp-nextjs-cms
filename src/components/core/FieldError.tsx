import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import getClassName from 'tools/getClassName';

import styles from './FieldError.module.scss';

interface IFieldErrorProps {
    className?: string;
    error?: {[key: string]: any};
}

const errorMessages = {
    required: 'This field is required',
    unknown: 'An unknown error has occured',
};

export default function FieldError({className, error}: IFieldErrorProps) {
    let errorResult = null;
    const [rootClassName] = getClassName({className, rootClass: 'field-error', styles});
    const {message, type} = error;

    if (message) {
        errorResult = message;
    } else {
        errorResult = errorMessages[type] || errorMessages.unknown;
    }

    return isEmpty(error) ? null : <div className={rootClassName}>{errorResult}</div>;
}
