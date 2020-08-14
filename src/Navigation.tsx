import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@shopify/restyle';

import { Post, Profile, Login } from './screens';
import { Theme } from '@styles/theme';
import { IStore } from '@interfaces';

const AuthorizedNavigation = () => {
  const TabNavigator = createBottomTabNavigator();
  const StackNavigator = createStackNavigator();
  const theme = useTheme<Theme>();

  const PostStack = () => (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Post" component={Post} />
    </StackNavigator.Navigator>
  );

  const ProfileStack = () => (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Profile" component={Profile} />
    </StackNavigator.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.text,
          inactiveTintColor: theme.colors.ghost,
        }}>
        <TabNavigator.Screen
          name="Posts"
          component={PostStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="list"
                size={26}
                color={focused ? theme.colors.text : theme.colors.ghost}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="person"
                size={26}
                color={focused ? theme.colors.text : theme.colors.ghost}
              />
            ),
          }}
        />
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
