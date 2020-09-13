import * as React from 'react';
import { Button } from 'react-native';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

import { UserActions } from '@actions';
import { Text, TextInput, Box } from '@components';
import { isLoading, isFailed } from '@utilities/apiState';
import { IStore } from '@interfaces';

interface FormElements {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const userLogin = useSelector((state: IStore) => state.user.login);

  const formValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(24),
  });

  const { control, errors, handleSubmit } = useForm<FormElements>({
    mode: 'onChange',
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmit = async (values: FormElements) => {
    const { email, password } = values;

    dispatch(
      await UserActions.Login({
        email,
        password,
      }),
    );
  };

  const renderFormError = () => {
    if (isFailed(userLogin.status)) {
      // TODO: Alert component
      return (
        <Text color="danger" textAlign="center" fontWeight="bold">
          {userLogin.error}
        </Text>
      );
    }
  };

  return (
    // TODO: Container component
    <Box p="m">
      {renderFormError()}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Email"
            autoCapitalize="none"
            textContentType="emailAddress"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
            errorText={errors.email && errors.email.message}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Password"
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
            errorText={errors.password && errors.password.message}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />

      <Button
        disabled={isLoading(userLogin.status)}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  );
};
