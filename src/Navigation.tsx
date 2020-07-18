import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { Feed, Profile, Login, Register } from './screens';
import { IStore } from '@interfaces';

const AuthorizedNavigation = () => {
  const TabNavigator = createBottomTabNavigator();
  const StackNavigator = createStackNavigator();

  const FeedStack = () => (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Feed" component={Feed} />
    </StackNavigator.Navigator>
  );

  const ProfileStack = () => (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Profile" component={Profile} />
    </StackNavigator.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Feed" component={FeedStack} />
        <TabNavigator.Screen name="Profile" component={ProfileStack} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

const UnauthorizedNavigation = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="Register" component={Register} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const Navigation = () => {
  const auth = useSelector((state: IStore) => state.auth);

  // check auth
  if (!auth.isLogin) {
    return <UnauthorizedNavigation />;
  }

  return <AuthorizedNavigation />;
};

export default Navigation;
