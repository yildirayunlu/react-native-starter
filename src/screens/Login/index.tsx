import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Box, Text } from '@components';

export const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Box>
  );
};
