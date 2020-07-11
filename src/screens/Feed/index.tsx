import * as React from 'react';
import { Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { UserActions, AuthActions } from '@actions';
import { Box, Text } from '@components';
import { isLoading } from '@utilities/apiState';
import { IStore } from '@interfaces';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: IStore) => state.user.list);

  React.useEffect(() => {
    (async () => {
      dispatch(await UserActions.List());
    })();
  }, [dispatch]);

  if (isLoading(userList.status)) {
    return (
      <Box>
        <Text>loading...</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Text>Users</Text>
      {userList.data?.map((user) => (
        <Box key={user.id}>
          <Text>{`${user.id}. ${user.first_name} ${user.last_name}`}</Text>
          <Text>{user.email}</Text>
          <Button
            title="Login"
            onPress={() => {
              dispatch(AuthActions.Login('test-token', user));
            }}
          />
        </Box>
      ))}
      <Button
        title="Logout"
        onPress={() => {
          dispatch(AuthActions.Logout());
        }}
      />
    </Box>
  );
};
