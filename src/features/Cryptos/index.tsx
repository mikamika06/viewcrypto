import { Container, Grid, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { type FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import {
  CryptosOrder,
  CryptosPagination,
  CryptosSearch,
  CryptosTable,
} from './components';
import { useCryptosStore } from '@/stores';
import type { Order } from '@/types/Api/Coingecko';
import { CRYPTOS_SIZE } from '@/utils/constants';
import ApiError from './ApiError';

const MemoizedSearch = memo(CryptosSearch);
const MemoizedOrder = memo(CryptosOrder);
const MemoizedTable = memo(CryptosTable);
const MemoizedPagination = memo(CryptosPagination);

const maxRequest = import.meta.env.VITE_MAX_COINGECKO_REQUESTS as number;
const totalPage = CRYPTOS_SIZE.CUSTOMIZE ? CRYPTOS_SIZE.TOTAL / CRYPTOS_SIZE.CUSTOMIZE : 10;
const customPageSize = CRYPTOS_SIZE.CUSTOMIZE ?? 10;

const Cryptos: FC = () => {
  const [orderValue, setOrderValue] = useState<Order>('market_cap_desc');
  const [debouncedOrderValue] = useDebouncedValue(orderValue, 1000, {
    leading: true,
  });
  const handleOrder = useCallback(
    (query: Order): void => setOrderValue(query),
    [],
  );

  const [activePage, setActivePage] = useState<number>(1);
  const [debouncedActivePage] = useDebouncedValue(activePage, 1000, {
    leading: true,
  });
  const handlePagination = useCallback(
    (value: number): void => setActivePage(value),
    [],
  );

  const requestCount = useRef<number>(0);
  const getCryptosMarket = useCryptosStore(store => store.getCryptosMarket);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (): Promise<void> => {
      try {
        if (requestCount.current >= maxRequest) return;

        setApiError(false);

        await getCryptosMarket({
          vs_currency: 'usd',
          order: debouncedOrderValue,
          per_page: customPageSize,
          page: debouncedActivePage,
          sparkline: true,
          price_change_percentage: '24h',
          locale: 'en',
        });

        if (isMounted) requestCount.current += 1;
      } catch (error) {
        console.error('Failed to fetch crypto data:', error);
        setApiError(true); 
      }
    };
    if (isMounted) fetchData();

    return () => {
      isMounted = false;
    };
  }, [debouncedOrderValue, debouncedActivePage]);

  return (
    <Container size="xl">
      <Stack>
        <Grid
          gutter='xs'
          gutterSm='sm'
          gutterMd='md'
          gutterLg='lg'
          gutterXl='xl'
          justify='space-between'
          grow
        >
          <Grid.Col span={12} sm='auto' md={8}>
            <MemoizedSearch />
          </Grid.Col>

          <Grid.Col span={12} sm='auto' md={4}>
            <MemoizedOrder value={orderValue} handler={handleOrder} />
          </Grid.Col>
        </Grid>

        {apiError ? (
          <ApiError 
            onRetry={() => {
              requestCount.current = 0; 
              getCryptosMarket({
                vs_currency: 'usd',
                order: debouncedOrderValue,
                per_page: customPageSize,
                page: debouncedActivePage,
                sparkline: true,
                price_change_percentage: '24h',
                locale: 'en',
              }).catch(console.error);
            }} 
          />
        ) : (
          <MemoizedTable />
        )}
        
        <MemoizedPagination
          total={totalPage}
          active={activePage}
          handler={handlePagination}
        />
      </Stack>
    </Container>
  );
};

export default Cryptos;