import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feed, Profile } from './screens';

const Navigation = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Feed" component={Feed} />
        <TabNavigator.Screen name="Profile" component={Profile} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
