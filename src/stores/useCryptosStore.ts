import { isAxiosError } from 'axios';
import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';

import { coingeckoApi } from '@/services/api';
import type {
    CryptosMarketData,
    CryptosMarketParams,
} from '@/types/Api/Coingecko';
import type { AxiosResponse } from '@/types/Api/global';
import { storeMiddleware } from '@/utils/helpers';

type State = AxiosResponse<CryptosMarketData[]> & {
    searchData?: CryptosMarketData[];
};

type Actions = {
    getCryptosMarket: (params: CryptosMarketParams) => Promise<void>;
    searchCryptosData: (result: string) => void;
};

const useCryptosStore = create<State & Actions>()(
    storeMiddleware<State & Actions>(
        (set, get) => ({
            data: [],
            searchData: [],
            status: null,
            error: null,
            isLoading: false,
            getCryptosMarket: async params => {
                try {
                    set({ isLoading: true });
                    const ctrl = new AbortController();
                    const { data, status } = await coingeckoApi({
                        method: 'get',
                        url: '/coins/markets',
                        signal: ctrl.signal,
                        params,
                    });
                    set({
                        data,
                        searchData: data,
                        status,
                        isLoading: false,
                    });
                } catch (error: unknown) {
                    if (isAxiosError(error)) {
                        console.error(`error message: ${error.message}`);
                        set({ error, isLoading: false });
                    } else {
                        throw new Error('An unexpected error occurred');
                    }
                } finally {
                    set({ isLoading: false });
                }
            },
            searchCryptosData: result => {
                set({ isLoading: true });

                const data = structuredClone(get().data);
                const searchData = structuredClone(get().searchData);
                const updatedData = result
                    ? data?.filter(
                            ({ id, symbol }) =>
                                id.includes(result.toLocaleLowerCase()) ||
                                symbol.includes(result.toLocaleLowerCase()),
                        )
                    : searchData;
                const errorMessage: Error = {
                    name: 'Not Found Error',
                    message: 'Doesn`t exist item',
                    stack:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
                };
                const error = updatedData?.length === 0 ? errorMessage : null;

                set({
                    data: updatedData,
                    error,
                    isLoading: false,
                });
            },
        }),
        {
            name: 'crypto-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
        { name: 'crypto-storage', store: 'crypto-storage' },
    ),
);

export { useCryptosStore };
