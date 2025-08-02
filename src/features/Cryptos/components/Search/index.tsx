import { Autocomplete, Loader } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { type FC, useEffect, useState, useTransition } from 'react';

import { useCryptosStore } from '@/stores';

const CryptosSearch: FC = () => {
    const [result, setResult] = useState<string>('');
    const [isPending, startTransition] = useTransition();
    const searchCryptosData = useCryptosStore(store => store.searchCryptosData);

    useEffect(() => {
        startTransition(() => searchCryptosData(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    return (
        <Autocomplete
            data={['bitcoin', 'ethereum', 'tether', 'binancecoin']}
            placeholder="Search cryptocurrencies"
            variant='filled'
            radius='lg'
            aria-label='Search on Cryptos Data'
            icon={<IconSearch size={16} />}
            rightSection={isPending ? <Loader variant='dots' size='xs' /> : null}
            value={result}
            onChange={value => setResult(value)}
            transitionProps={{
                transition: 'pop-top-left',
                duration: 150,
                timingFunction: 'ease-in-out',
            }}
            styles={theme => ({
                dropdown: {
                    borderRadius: theme.radius.md,
                },
                item: {
                    borderRadius: theme.radius.md,
                },
            })}
        />
    );
};

export default CryptosSearch;