import { Alert, Button, Group, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { type FC } from 'react';

interface ApiErrorProps {
  onRetry: () => void;
}

const ApiError: FC<ApiErrorProps> = ({ onRetry }) => (
  <Alert
    icon={<IconAlertCircle size={24} />}
    title="API Connection Error"
    color="orange"
    radius="lg"
    variant="filled"
  >
    <Text size="sm" mb="md">
      Unable to fetch cryptocurrency data. CoinGecko API has limitations on free requests.
    </Text>
    <Group position="right">
      <Button onClick={onRetry} variant="white" color="dark">
        Try Again
      </Button>
    </Group>
  </Alert>
);

export default ApiError;