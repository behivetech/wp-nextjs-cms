import React, {createContext, useContext, useReducer, useState} from 'react';

type IBlockData = {[key: string]: any};

interface IBlock {
    componentName: string;
    data?: IBlockData;
}

interface ILayout {
    componentName: string;
}

interface IBlocks {
    blocks: IBlock[];
}

export interface IPageData {
    areas: {
        [key: string]: IBlocks;
    };
    pageLayout: ILayout;
    mainLayout: ILayout;
}

interface ICMSPageProviderProps {
    children: React.ReactNode;
    pageData: IPageData;
}

interface IContext {
    addBlock: (areaName: string, blockName: string, data: IBlockData) => void;
    editBlock: boolean;
    layoutDrawerDetails: React.ReactNode;
    editPage: boolean;
    pageData: IPageData;
    removeBlock: (areaName: string, index: number) => void;
    setLayoutDrawerDetails: (details: React.ReactNode) => void;
    toggleEditPage: () => void;
    toggleEditBlock: (openOverride?: boolean) => void;
    updateBlockData: (areaName: string, index: number, data: IBlockData) => void;
}

const DEFAULT_CONTEXT: IContext = {
    addBlock: (areaName, blockName, data) => null,
    editBlock: false,
    layoutDrawerDetails: null,
    editPage: false,
    pageData: {
        areas: {},
        mainLayout: {componentName: 'DefaultMainLayout'},
        pageLayout: {componentName: 'DefaultPageLayout'},
    },
    removeBlock: (areaName, index) => null,
    setLayoutDrawerDetails: (details) => null,
    toggleEditPage: () => null,
    toggleEditBlock: (openOverride) => null,
    updateBlockData: (areaName, index, data) => null,
};

const CMSPageContext = createContext(DEFAULT_CONTEXT);

export function useCMSPageProvider() {
    return useContext(CMSPageContext);
}

function reducer(state, {type, values}) {
    const actions = {
        ADD_BLOCK: () => {
            const {areaName, blockName, data} = values;

            return {
                ...state,
                [areaName]: {
                    blocks: [...state[areaName].blocks, {componentName: blockName, data}],
                },
            };
        },
        REMOVE_BLOCK: () => {
            const {areaName, index} = values;
            const newBlocks = state[areaName].blocks;

            if (areaName && index >= 0 && newBlocks && newBlocks.length) {
                newBlocks.splice(index, 1);
            }

            return newBlocks.length ? {...state, [areaName]: {blocks: newBlocks}} : state;
        },
        UPDATE_BLOCK_DATA: () => {
            const {areaName, index, data} = values;
            const newBlocks = state[areaName].blocks;

            if (areaName && index >= 0 && newBlocks && newBlocks.length) {
                newBlocks.splice(index, 1, {...newBlocks[index], data});
            }

            return newBlocks.length ? {...state, [areaName]: {blocks: newBlocks}} : state;
        },
    };

    return actions[type] ? actions[type]() : state;
}
const CMSPageProvider: React.FunctionComponent<ICMSPageProviderProps> = ({
    children,
    pageData,
}: ICMSPageProviderProps) => {
    const [editBlock, setEditBlock] = useState(false);
    const [layoutDrawerDetails, setLayoutDrawerDetailsState] = useState(null);
    const [editPage, setEditPage] = useState(false);
    const [pageState, dispatch] = useReducer(reducer, pageData);

    function setLayoutDrawerDetails(details = null) {
        setLayoutDrawerDetailsState(details);
    }

    function removeBlock(areaName, index) {
        dispatch({type: 'REMOVE_BLOCK', values: {areaName, index}});
        setEditBlock(false);
    }

    function addBlock(areaName, blockName, data) {
        dispatch({type: 'ADD_BLOCK', values: {areaName, blockName, data}});
        setEditBlock(false);
    }

    function toggleEditPage() {
        setEditPage(!editPage);
        setEditBlock(false);
        setLayoutDrawerDetailsState(null);
    }

    function toggleEditBlock(openOverride) {
        const newDrawerOpen = openOverride !== undefined ? openOverride : !editBlock;

        setEditBlock(newDrawerOpen);

        if (!newDrawerOpen) {
            console.log('Clearing Drawer Layout');
            setLayoutDrawerDetailsState(null);
        }
    }

    function updateBlockData(areaName, index, data) {
        dispatch({type: 'UPDATE_BLOCK_DATA', values: {areaName, index, data}});
        setEditBlock(false);
    }

    const context = {
        addBlock,
        editBlock,
        layoutDrawerDetails,
        editPage,
        pageData: pageState,
        removeBlock,
        setLayoutDrawerDetails,
        toggleEditBlock,
        toggleEditPage,
        updateBlockData,
    };

    return <CMSPageContext.Provider value={context}>{children}</CMSPageContext.Provider>;
};

export default CMSPageProvider;
