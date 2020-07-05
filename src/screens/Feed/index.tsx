import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Box, Text } from '../../components';

export const Feed: React.FC = () => {
  return (
    <Box>
      <Text>Feed Screen</Text>
      <Icon name="check-circle" size={30} />
    </Box>
  );
};
