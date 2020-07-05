import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Box, Text } from '../../components';

export const Feed: React.FC = () => {
  return (
    <Box>
      <Text>Feed Screen</Text>
      <Icon name="rocket" size={30} />
    </Box>
  );
};
