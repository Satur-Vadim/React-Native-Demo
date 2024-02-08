import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { createStackNavigator } from '@react-navigation/stack';

import useAppNavigation from './hooks/useAppNavigation';

import type { TRootStackParamList } from './types/TRootStackParamList';
import BootSplash from "../screens/BootSplash/BootSplash";
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<TRootStackParamList>();

function MainStackNavigator() {

  const navigation = useAppNavigation();

  useEffect(() => {
    RNBootSplash.hide().then(() => {
      navigation.navigate('BootSplash');
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="BootSplash">
      <Stack.Screen
        name="BootSplash"
        component={BootSplash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
