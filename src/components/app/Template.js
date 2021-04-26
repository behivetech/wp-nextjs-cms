import React, {lazy} from 'react';

export default function Template() {
    // TODO: query for the current template name from WP db
    const templateKey = 'default';
    const DynamicTemplate = lazy(() => import(`templates/${templateKey}`));
    const Loading = () => <div>Loading...</div>;

    return (
        <Suspense fallback={<Loading />}>
            <DynamicTemplate />
        </Suspense>
    );
}
