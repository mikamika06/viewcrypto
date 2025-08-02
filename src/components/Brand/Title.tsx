import { Text, Title } from '@mantine/core';
import type { FC } from 'react';

type Props = {
    boldTitle: string;
    regularTitle: string;
};

const BrandTitle: FC<Props> = ({ boldTitle, regularTitle }) => {

    return (
        <Title order={3} tt='capitalize'>
            <Text span fw={700}>
                {boldTitle}
            </Text>
            <Text span>{regularTitle}</Text>
        </Title>
    );
};

export default BrandTitle;
