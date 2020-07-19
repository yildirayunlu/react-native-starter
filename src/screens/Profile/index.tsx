import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Button } from 'react-native';

import { AuthActions } from '@actions';
import { Text } from '@components';
import { IStore } from '@interfaces';
import styles from './styles';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: IStore) => state.auth);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: user.avatar,
        }}
      />
      <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
      <Text style={styles.email}>{`${user.email}`}</Text>
      <Button
        title="Logout"
        onPress={async () => dispatch(await AuthActions.Logout())}
      />
    </View>
  );
};
