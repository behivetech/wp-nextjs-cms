import dynamic from 'next/dynamic';

export const DefaultPageLayout = dynamic(
    () => import('components/page-layouts/DefaultPageLayout')
);
