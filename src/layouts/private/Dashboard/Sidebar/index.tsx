import { Navbar, ScrollArea, Stack } from '@mantine/core';
import { type FC } from 'react';

import Brand from '@/components/Brand';
import { NavLinkGroup, NavLinkMinimal } from '@/components/NavLink';
import { navLinkData } from '@/data';
import { randomId } from '@/utils/helpers';

const Sidebar: FC = () => {
  return (
    <Navbar
      fixed={true}
      width={{
        sm: 'max(2rem, calc(21.5vw - 6.5rem))',
      }}
      sx={theme => ({
        height: 'unset',
        border: 'unset',
        background: 'transparent',
        insetBlock: theme.spacing.xl,
        insetInline: `${theme.spacing.md} auto`,
      })}
    >
      <Navbar.Section
        sx={theme => ({
          marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        })}
      >
        <Brand />
      </Navbar.Section>

      <Navbar.Section
        component={ScrollArea}
        style={{
          position: 'static',
        }}
        py='xs'
        grow
      >
        <Stack
          display={{
            lg: 'none',
          }}
        >
          {navLinkData.map(items => {
            const id: string = randomId();
            return <NavLinkMinimal key={id} {...items} />;
          })}
        </Stack>

        <Stack
          display={{
            base: 'none',
            lg: 'flex',
          }}
        >
          {navLinkData.map(items => {
            const id: string = randomId();
            return <NavLinkGroup key={id} {...items} />;
          })}
        </Stack>
      </Navbar.Section>

      
    </Navbar>
  );
};

export default Sidebar;
