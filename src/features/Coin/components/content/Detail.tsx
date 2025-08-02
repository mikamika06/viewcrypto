import { Divider, Spoiler, Stack, Text } from '@mantine/core';
import { IconListDetails } from '@tabler/icons-react';
import type { FC } from 'react';

import { useMatcheSize } from '@/hooks';
import { useCoinStore } from '@/stores';

const Detail: FC = () => {
  const size = useMatcheSize();
  const { data } = useCoinStore();
  
  const description = data?.description?.en || 'No description available';

  return (
    <Stack>
      <Divider
        my='xs'
        variant='dashed'
        labelPosition='center'
        label={
          <>
            <IconListDetails size={15} />
            <Text tt='capitalize' ml={5}>
              Details
            </Text>
          </>
        }
      />

      <Spoiler
        maxHeight={size.smallerThan.sm ? 50 : 55}
        showLabel="Show more"
        hideLabel="Hide"
        styles={theme => ({
          control: {
            color: theme.colors.blue[9],
          },
        })}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Spoiler>
    </Stack>
  );
};

export default Detail;