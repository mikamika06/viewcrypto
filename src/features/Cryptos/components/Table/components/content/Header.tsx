import { Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';

import { cryptosTableColumnData as columns } from '@/data';
import { randomId } from '@/utils/helpers';

const Header: FC = () => {
  const resetStyles: CSSProperties = { border: 'unset', fontWeight: 'normal' };

  return (
    <tr>
      {columns.map(({ column }) => {
        const id: string = randomId();
        return (
          <th key={id} style={resetStyles}>
            <Text size='xs' color='dimmed' tt='capitalize' truncate>
              {column}
            </Text>
          </th>
        );
      })}
    </tr>
  );
};

export default Header;
