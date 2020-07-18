import * as React from 'react';
import { Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { Box, TextInput } from '@components';

export const Login: React.FC = () => {
  // const navigation = useNavigation();
  return (
    <Box style={{ padding: 16 }}>
      <TextInput
        label="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        errorText="This field is required!"
      />
      <TextInput
        label="Password"
        autoCapitalize="none"
        textContentType="password"
        isValid={true}
        errorText="This field is required!"
      />
      <Button title="Login" onPress={() => {}} />
    </Box>
  );
};
