import classnames from 'classnames';
import {mapKeys} from 'lodash';

interface getClassNameArgs {
    /** className usually coming in as a prop from the component to be added to the root element's class */
    className?: string;
    /**
        modifiers is an object that determines what modifier classes are added to the root element
        to follow the BEM styling pattern
    */
    modifiers?: {[key: string]: string};
    /** rootClass is the main className to be used in the component and prefixed on the element classes */
    rootClass: string;
}

export default function getClassName({
    className,
    modifiers,
    rootClass,
}: getClassNameArgs): [string, (string) => string] {
    function getModifiers() {
        return modifiers
            ? mapKeys(modifiers, (modVal, modKey) => `${rootClass}--${modKey}`)
            : {};
    }

    /** 
        getChildClass is used to retrieve the classname for child elements. It auto prefixes the 
        rootClass to the child classname using BEM code standards.
    */
    function getChildClass(childClassName) {
        return `${rootClass}__${childClassName}`;
    }

    const rootClassName = classnames(
        {
            ...getModifiers(),
        },
        className,
        rootClass
    );

    return [rootClassName, getChildClass];
}
