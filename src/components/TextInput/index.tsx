import React from 'react';
import { View, TextInput as RNTextInput, TextInputProps } from 'react-native';

import { Text } from '@components';
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
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={[styles.textInput, !!errorText && styles.textInputError]}
        {...otherProps}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};
