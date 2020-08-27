import { StyleSheet } from 'react-native';

import theme from '@styles/theme';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.ghost,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  textInputSuccess: {
    borderColor: theme.colors.success,
  },
  textInputError: {
    borderColor: theme.colors.danger,
  },
  errorText: {
    color: theme.colors.danger,
  },
});
