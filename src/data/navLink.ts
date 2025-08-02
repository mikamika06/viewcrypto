import {
  IconBrandCoinbase,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFileAnalytics,
  IconHome2,
  IconNotes,
  IconSettings
} from '@tabler/icons-react';

import type { NavLinkProp } from '@/types/Prop';

const navLinkData: NavLinkProp[] = [
  {
    label: 'Home',
    link: '/home',
    icon: IconHome2,
  },
  {
    label: 'Сryptos',
    link: '/cryptos',
    icon: IconBrandCoinbase,
  },
  {
    label: 'Market News',
    link: '/market-news',
    icon: IconNotes,
    items: [
      {
        label: 'navLink_3_Item_1',
        link: '/market-news/overview',
      },
      {
        label: 'navLink_3_Item_2',
        link: '/market-news/forecasts',
      },
      {
        label: 'navLink_3_Item_3',
        link: '/market-news/outlook',
      },
      {
        label: 'navLink_3_Item_4',
        link: '/market-news/real-time',
      },
    ],
  },
  {
    label: 'Releases',
    link: '/releases',
    icon: IconCalendarStats,
    items: [
      {
        label: 'Upcoming',
        link: '/releases/upcoming',
      },
      {
        label: 'Previous Releases',
        link: '/releases/previous',
      },
      {
        label: 'Release Schedule',
        link: '/releases/schedule',
      },
    ],
    opened: true,
  },
  {
    label: 'Analytics',
    link: '/analytics',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    label: 'Contracts',
    link: '/contracts',
    icon: IconFileAnalytics,
  },
  {
    label: 'Settings',
    link: '/settings',
    icon: IconSettings,
  }
];

export { navLinkData };
