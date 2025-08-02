import { type Resource } from 'i18next';

//* translation catalog
const resources: Resource = {
    en: {
        translation: {
            //* Brand titles
            brandTitle_1: 'crypto',
            brandTitle_2: 'app',

            //* Navlink data
            navLink_1: 'home',
            navLink_2: 'cryptos',
            navLink_3: 'market news',
            navLink_3_Item_1: 'overview',
            navLink_3_Item_2: 'forecasts',
            navLink_3_Item_3: 'outlook',
            navLink_3_Item_4: 'real time',
            navLink_4: 'releases',
            navLink_4_Item_1: 'upcoming releases',
            navLink_4_Item_2: 'previous releases',
            navLink_4_Item_3: 'releases schedule',
            navLink_5: 'analytics',
            navLink_6: 'contracts',
            navLink_7: 'settings',
            navLink_8: 'security',
            navLink_8_Item_1: 'enable 2FA',
            navLink_8_Item_2: 'change password',
            navLink_8_Item_3: 'recovery codes',
            navLink_9: 'account',
            navLink_Last: 'logout',

            //* User avatar item data
            userAvatarItem_1: 'settings',
            userAvatarItem_1_Option_1: 'account settings',
            userAvatarItem_1_Option_2: 'change account',
            userAvatarItem_1_Option_3: 'logout',
            userAvatarItem_2: 'danger zone',
            userAvatarItem_2_Option_1: 'delete account',

            //* Cryptos table columns
            cryptosTableColumn_1: 'coin info',
            cryptosTableColumn_2: 'market Cap',
            cryptosTableColumn_3: 'current Price',
            cryptosTableColumn_4: 'sparkline in last week',
            cryptosTableColumn_5: 'last Updated',

            //* Cryptos search values
            cryptosSearchPlaceholder: 'search in cryptos item',

            //* Cryptos order values
            cryptosOrderPlaceholder: 'pick one',
            cryptosOrderNotFound: 'no options',

            //* Coin header items
            coinItem_1: 'current price',
            coinItem_2: 'price change 24h',
            coinItem_3: 'highest price 24h',
            coinItem_4: 'lowest price 24h',
            coinItem_5: 'market cap rank',
            coinItem_6: 'market cap',
            coinItem_7: 'total volume',
            coinItem_8: 'coingecko score',
            coinItem_9: 'developer score',
            coinItem_10: 'community score',

            //* Coin detail items
            coinDetail: 'coin detail',
            coinDetailLabel_1: 'show more',
            coinDetailLabel_2: 'hide',

            //* Redirect page title
            redirectTitle: 'redirect to main page...',

            //* Notfound page title
            notfoundTitle: 'go home page',
        },
    },
};

export { resources };
