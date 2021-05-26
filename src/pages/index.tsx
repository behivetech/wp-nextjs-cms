import React from 'react';
import CMSTemplate from 'cms/components/CMSTemplate';

interface IHomeProps {
    pageData: any;
}

export default function Home({pageData}: IHomeProps) {
    return <CMSTemplate />;
}

export async function getStaticProps() {
    return {
        props: {
            pageData: {
                footer: {
                    blocks: [{componentName: 'DefaultFooter', data: {}}],
                },
                header: {
                    blocks: [
                        {
                            componentName: 'OutsideHeader',
                            data: {
                                links: [
                                    {
                                        href: 'http://www.outsidetv.com/',
                                        linkChild: 'TV',
                                    },
                                    {
                                        href:
                                            'https://www.outsideonline.com/podcasts?__hstc=46213176.3f73dc5b07a3972ce51382ab199ade12.1621621216223.1621621216223.1621621216223.1&amp;__hssc=46213176.2.1621621216223&amp;__hsfp=4011153718',
                                        linkChild: 'Podcasts',
                                    },
                                    {
                                        href: 'https://www.gaiagps.com',
                                        linkChild: 'Maps',
                                    },
                                    {
                                        href: 'https://www.athletereg.com',
                                        linkChild: 'Events',
                                    },
                                    {
                                        href: 'https://www.getcairn.com',
                                        linkChild: 'Shop',
                                    },
                                    {
                                        href: '/outsideplus',
                                        linkChild: 'Outside+',
                                    },
                                ],
                            },
                        },
                    ],
                },
                layout: {
                    componentName: 'DefaultLayout',
                    data: {},
                },
                mainLeft: {
                    blocks: [
                        {componentName: 'DefaultText', data: {text: 'Left Line 1'}},
                        {componentName: 'DefaultText', data: {text: 'Left Line 2'}},
                        {componentName: 'DefaultText', data: {text: 'Left Line 3'}},
                        {componentName: 'DefaultText', data: {text: 'Left Line 4'}},
                    ],
                },
                mainRight: {
                    blocks: [
                        {componentName: 'DefaultText', data: {text: 'Right Line 1'}},
                        {componentName: 'DefaultText', data: {text: 'Right Line 2'}},
                        {componentName: 'DefaultText', data: {text: 'Right Line 3'}},
                    ],
                },
                pageTemplate: {
                    componentName: 'TwoColumn',
                },
                sections: [
                    {
                        sectionKey: 'twoColumnLeft',
                        blocks: [
                            {
                                blockId: 1,
                                componentName: 'DefaultText',
                            },
                        ],
                    },
                    {
                        sectionKey: 'twoColumnRight',
                        blocks: [
                            {
                                blockId: 2,
                                componentName: 'DefaultText',
                            },
                            {
                                blockId: 3,
                                componentName: 'DefaultText',
                            },
                        ],
                    },
                ],
            },
        },
    };
}
