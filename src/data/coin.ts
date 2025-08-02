import type { CoinItemProp } from '@/types/Prop';

const coinItems: Array<Pick<CoinItemProp, 'title'>> = [
  {
    title: 'Current Price',
  },
  {
    title: 'Price Change 24h',
  },
  {
    title: 'Highest Price 24h',
  },
  {
    title: 'Lowest Price 24h',
  },
  {
    title: 'Market Cap Rank',
  },
  {
    title: 'Market Cap',
  },
  {
    title: 'Total Volume',
  },
  {
    title: 'Coingecko Score',
  },
  {
    title: 'Developer Score',
  },
  {
    title: 'Community Score',
  },
];

export { coinItems };
