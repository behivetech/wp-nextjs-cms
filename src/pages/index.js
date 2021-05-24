import React from 'react';
import Template from 'cms/components/Template';
import CmsPageProvider from 'cms/components/CmsPageProvider';

export default function Home({pageData}) {
    return pageData?.template?.componentName
        ? (
            <CmsPageProvider pageData={pageData}>
                <Template componentName={pageData.template.componentName} />
            </CmsPageProvider>)
        : null;
}

export async function getStaticProps() {

    return {
        props: {
            pageData: {
                template: {
                    componentName: 'TwoColumn',
                },
                sections: [
                    {
                        sectionKey: 'twoColumnLeft',
                        blocks: [
                            {
                                blockId: 1,
                                blockComponent: 'Text',
                            },
                        ],
                    },
                    {
                        sectionKey: 'twoColumnRight',
                        blocks: [
                            {
                                blockId: 2,
                                blockComponent: 'Text',
                            },
                            {
                                blockId: 3,
                                blockComponent: 'Text',
                            },
                        ],
                    },
                ],
            },
        },
    }
}
