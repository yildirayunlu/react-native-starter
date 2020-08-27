import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

import { Text, Box } from '@components';
import styles from './styles';

type Props = TextInputProps & {
  label: string;
  errorText?: string;
};

export const TextInput: React.FC<Props> = ({
  label,
  errorText,
  ...otherProps
}) => {
  return (
    <Box style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={[styles.textInput, !!errorText && styles.textInputError]}
        {...otherProps}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </Box>
  );
};
