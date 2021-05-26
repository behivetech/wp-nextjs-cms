import * as React from 'react';
import axios from 'axios';

/**  See /docs/DataComponents/DataClientContext.md for more info */

const DEFAULT_CONTEXT = {
    dataClient: axios,
    getCancelToken: (cancel) => undefined,
};

/** Initialize axios library with default baseURL and header settings */
function initAxios({accessToken}) {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    });
}

const DataClientContext = React.createContext(DEFAULT_CONTEXT);

function getAccessToken() {
    return null; // TODO: resolve the access token
}

/**
    This hook is used to grab the context directly from this provider.
    It's primary need is for the useDataClient hook.
*/
export function useDataClientContext() {
    return React.useContext(DataClientContext);
}

export default function DataClientProvider({$stateGo, children, signOut}) {
    const dataClient = initAxios({accessToken: getAccessToken()});

    function handleSignOut() {
        // TODO: Add sign out functionality
        return null;
    }

    // This is a function to get a cancelToken from axios to cancel requests
    function getCancelToken(callbackCancel = () => null) {
        const CancelToken = axios.CancelToken;

        return new CancelToken(function executor(cancel) {
            callbackCancel(cancel);
        });
    }

    /**
        This area is using the axios interceptors to be able to globally
        add default actions such as signing out when the response status is a 401.
    */
    dataClient.interceptors.response.use(
        (response) => response,
        (error) => {
            // Execute auth's signOut when 401 (Not Authorized) is response
            if (Number(error?.response?.status) === 401) {
                handleSignOut();
            }

            return Promise.reject(error);
        }
    );

    const context = {
        dataClient,
        getCancelToken,
    };

    return (
        <DataClientContext.Provider value={context}>
            {children}
        </DataClientContext.Provider>
    );
}
