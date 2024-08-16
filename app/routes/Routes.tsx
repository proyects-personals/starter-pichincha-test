import React from 'react';
import { getCustomHeaderOptions } from '../utils/getCustomHeaderOptions';
import { RouteNames } from '../enums/routeNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationScreens } from './types';
import { getScreenOptions } from '../utils/getScreenOptions';
import ProductsListScreen from '../modules/Products/ProductsListScreen';

const Stack = createStackNavigator<NavigationScreens>();

const Routes: React.FC = () => {
  const screenOptions: StackNavigationOptions = getScreenOptions();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={RouteNames.ListProduct}
        component={ProductsListScreen}
        options={getCustomHeaderOptions("BANCO")}
      />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
