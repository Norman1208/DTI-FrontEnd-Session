'use client';

import { store } from '@/store';
import {
    QueryClient, 
    QueryClientProvider
} from '@tanstack/react-query';
import {
    FC, 
    ReactNode
} from 'react';
import {Provider} from 'react-redux';

interface ProvidersProps {
    children: ReactNode
}

const makeQueryClient = () => new QueryClient();

const queryClient = new QueryClient( {
    defaultOptions: {
        queries: {
            staleTime: 60*1000
        }
    }
});

let browserQueryClient: QueryClient | undefined;

const getQueryClient = () => {
    if (typeof window === 'undefined') {
        return makeQueryClient();
    }

    if (!browserQueryClient) {
        browserQueryClient = makeQueryClient();

    }
};