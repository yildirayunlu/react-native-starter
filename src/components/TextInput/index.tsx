import React from 'react';
import { View, TextInput as BaseTextInput, TextInputProps } from 'react-native';

import { Text } from '@components';
import styles from './styles';

type Props = TextInputProps & {
  label: string;
  isValid?: boolean;
  errorText?: string;
};

export const TextInput: React.FC<Props> = ({
  label,
  isValid,
  errorText,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <BaseTextInput
        style={[
          styles.textInput,
          isValid ? styles.textInputSuccess : styles.textInputError,
        ]}
        {...otherProps}
      />
      {!isValid && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};
