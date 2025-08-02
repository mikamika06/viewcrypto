import { Flex, Group, Navbar, ScrollArea } from '@mantine/core';
import { type FC } from 'react';

import { NavLinkTab } from '@/components/NavLink';
import { navLinkData } from '@/data';
import { HEIGHT_SIZE } from '@/utils/constants';
import { randomId } from '@/utils/helpers';

const BASE_HEIGHT = `calc(${HEIGHT_SIZE.SECOND} * 1.8)`;

const Tabbar: FC = () => {
  return (
    <Navbar
      fixed={true}
      h={BASE_HEIGHT}
      style={{
        border: 'unset',
        insetBlock: 'auto 0',
        maskImage: `linear-gradient(to bottom, transparent 0%, var(--mantine-color-body) 25%)`,
      }}
    >
      <Navbar.Section component={ScrollArea} grow>
        <Group h={BASE_HEIGHT} align='flex-end'>
          <Flex
            gap='xs'
            justify='flex-start'
            align='flex-end'
            direction='row'
            wrap='nowrap'
            style={{
              backgroundColor: 'var(--mantine-primary-color-light)',
              borderRadius: 'var(--mantine-spacing-xs)',
            }}
          >
            {navLinkData.map(items => {
              const id: string = randomId();
              return <NavLinkTab key={id} {...items} />;
            })}
          </Flex>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default Tabbar;
