import { Alert, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { type FC } from 'react';

type Props = {
    title: string;
};

const ErrorPart: FC<Props> = ({ title }) => {
    return (
        <Alert
            icon={<IconAlertCircle size={24} stroke={1.5} />}
            title={title || "API Limit"}
            mih={150}
            color='red'
            radius='lg'
            variant='light'
            p='xl'
        >
            <Text fz='sm' ta='justify'>
                {title || "The API request limit has been exceeded. Please wait a few seconds and try again."}
            </Text>
        </Alert>
    );
};

export default ErrorPart;
