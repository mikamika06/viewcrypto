import { Box, List, Text, ThemeIcon, useMantineTheme } from '@mantine/core';
import { IconCheckupList, IconListDetails } from '@tabler/icons-react';
import { type FC } from 'react';

import { coinItems } from '@/data';
import { useCoinStore } from '@/stores';
import type { CoinItemProp } from '@/types/Prop';
import { intlFormat, randomId } from '@/utils/helpers';

const ListItem: FC = () => {
  const { data } = useCoinStore();
  const theme = useMantineTheme();

  const options = [
    data?.market_data?.current_price?.usd !== undefined
      ? intlFormat.currencyNumber().format(Number(data.market_data.current_price.usd))
      : '-',

    data?.market_data?.price_change_percentage_24h_in_currency?.usd !== undefined
      ? intlFormat.percentUnit().format(
          Number(data.market_data.price_change_percentage_24h_in_currency.usd) / 100
        )
      : '-',

    data?.market_data?.high_24h?.usd !== undefined
      ? intlFormat.currencyNumber().format(Number(data.market_data.high_24h.usd))
      : '-',

    data?.market_data?.low_24h?.usd !== undefined
      ? intlFormat.currencyNumber().format(Number(data.market_data.low_24h.usd))
      : '-',

    data?.market_data?.market_cap_rank !== undefined
      ? intlFormat.shortCompact().format(Number(data.market_data.market_cap_rank))
      : '-',

    data?.market_data?.market_cap?.usd !== undefined
      ? intlFormat.shortCompact().format(Number(data.market_data.market_cap.usd))
      : '-',

    data?.market_data?.total_volume?.usd !== undefined
      ? intlFormat.shortCompact().format(Number(data.market_data.total_volume.usd))
      : '-',

    data?.coingecko_score !== undefined
      ? intlFormat.percentUnit().format(Number(data.coingecko_score) / 100)
      : '-',

    data?.developer_score !== undefined
      ? intlFormat.percentUnit().format(Number(data.developer_score) / 100)
      : '-',

    data?.community_score !== undefined
      ? intlFormat.percentUnit().format(Number(data.community_score) / 100)
      : '-',
  ];
  
  const items: CoinItemProp[] = coinItems.map(({ title }, index) => ({
    title,
    item: options[index],
  }));

  const defaultIcon = (
    <ThemeIcon size={24} radius="xl" color={theme.primaryColor}>
      <IconListDetails size={16} />
    </ThemeIcon>
  );

  const priceChange = Number(data?.market_data?.price_change_percentage_24h_in_currency?.usd);
  const statusIcon = (
    <ThemeIcon 
      color={priceChange > 0 ? theme.primaryColor : priceChange < 0 ? 'red' : 'dimmed'} 
      size={24} 
      radius="xl"
    >
      <IconCheckupList size={16} />
    </ThemeIcon>
  );

  return (
    <Box>
      <List spacing="xs" size="sm" center icon={defaultIcon}>
        {items.map(({ title, item }, index) => {
          const id = randomId();
          return (
            <List.Item key={id} icon={index < 4 ? statusIcon : null}>
              <Text span size="xs" transform="capitalize" color="dimmed" truncate>
                {title}:
              </Text>
              <Text span mx="xs">
                {item}
              </Text>
            </List.Item>
          );
        })}
      </List>
    </Box>
  );
};

export default ListItem;
