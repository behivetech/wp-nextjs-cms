import React, {createContext, useContext} from 'react';

interface ICmsPageProviderProps {
    children: React.ReactNode,
    pageData: any
}

interface IContext {
    getSection: (sectionKeyArg: string) => any;
    pageData: any;
}

const DEFAULT_CONTEXT: IContext = {
    getSection: (sectionKeyArg) => ({}),
    pageData: {
        template: {
            name: null,
        },
        sections: [],
    }

}

const CmsPageProviderContext = createContext(DEFAULT_CONTEXT);

export function useCmsPageProvider() {
    return useContext(CmsPageProviderContext)
};

export default function CmsPageProvider({children, pageData}: ICmsPageProviderProps) {
    function getSection(sectionKeyArg) {
        const sections = pageData.sections || [];

        console.log({sections})
        return sections.find(({sectionKey}) => sectionKey === sectionKeyArg);
    }

    const context = {
        getSection,
        pageData,
    };

    return (
        <CmsPageProviderContext.Provider value={context}>
            {children}
        </CmsPageProviderContext.Provider>
    );
}
