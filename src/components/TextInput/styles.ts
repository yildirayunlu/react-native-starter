import { StyleSheet } from 'react-native';

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
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  textInputSuccess: {
    borderColor: 'green',
  },
  textInputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
});
