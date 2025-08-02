import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { type FC, type ReactNode } from 'react';

import { createTheme } from './theme';
import { useColorScheme, useThemeColor } from '@/hooks';

type Props = {
    children: ReactNode;
};

const MantineProviderWrapper: FC<Props> = ({ children }) => {
    const [ colorScheme, toggleColorScheme ] = useColorScheme();
    const [ primaryColor ] = useThemeColor();
    
    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    
    const theme = createTheme({
        colorScheme,
        primaryColor,
    });

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default MantineProviderWrapper;
