import dynamic from 'next/dynamic';

export const DefaultHeader = dynamic(() => import('components/blocks/DefaultHeader'));
export const DefaultFooter = dynamic(() => import('components/blocks/DefaultFooter'));
export const DefaultText = dynamic(() => import('components/blocks/DefaultText'));
export const DefaultTextAdd = dynamic(() =>
    import('components/blocks/DefaultText').then(({Add}) => Add)
);
export const DefaultTextEdit = dynamic(() =>
    import('components/blocks/DefaultText').then(({Edit}) => Edit)
);
export const OutsideHeader = dynamic(() => import('components/blocks/OutsideHeader'));
