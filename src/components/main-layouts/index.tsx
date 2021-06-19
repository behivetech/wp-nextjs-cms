import dynamic from 'next/dynamic';

export const DefaultMainLayout = dynamic(
    () => import('components/main-layouts/DefaultMainLayout')
);
export const TwoColumn = dynamic(() => import('components/main-layouts/TwoColumn'));
