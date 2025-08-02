import { Select } from '@mantine/core';
import { type FC } from 'react';

import { cryptosOrderData as orders } from '@/data';
import type { Order } from '@/types/Api/Coingecko';

type Props = {
  value: string;
  handler: (query: Order) => void;
};

const CryptosOrder: FC<Props> = ({ value, handler }) => {
  return (
    <Select
      data={orders}
      defaultValue={value}
      searchValue={value}
      onSearchChange={query => handler(query as Order)}
      
      variant='filled'
      radius='lg'
      clearable
      searchable
      withinPortal
      aria-label='Order Cryptos Data'
      clearButtonProps={{ 'aria-label': 'Clear select field' }}
      
      styles={{
        dropdown: {
          borderRadius: 'var(--mantine-radius-md)',
        },
        item: {
          borderRadius: 'var(--mantine-radius-md)',
          '&[data-selected]': {
            '&, &:hover': {
              color: 'var(--mantine-primary-color-filled)',
              backgroundColor: 'var(--mantine-primary-color-light)',
              backdropFilter: 'blur(10px)',
            },
          },
        },
      }}
    />
  );
};

export default CryptosOrder;