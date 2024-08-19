import React from 'react';
import { getCustomHeaderOptions } from '../utils/getCustomHeaderOptions';
import { RouteNames } from '../enums/routeNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationScreens } from './types';
import { getScreenOptions } from '../utils/getScreenOptions';
import ListProductScreen from '../modules/Products/ListProductScreen';
import CreateProductScreen from '../modules/Products/CreateProductScreen';
import UpdateProductScreen from '../modules/Products/UpdateProductScreen';

const Stack = createStackNavigator<NavigationScreens>();

const Routes: React.FC = () => {
  const screenOptions: StackNavigationOptions = getScreenOptions();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={RouteNames.ListProduct}
        component={ListProductScreen}
        options={getCustomHeaderOptions("BANCO")}
      />
      <Stack.Screen
        name={RouteNames.createProduct}
        component={CreateProductScreen}
        options={getCustomHeaderOptions("BANCO")}
      />
      <Stack.Screen
        name={RouteNames.updateProduct}
        component={UpdateProductScreen}
        options={getCustomHeaderOptions("BANCO")}
      />
       <Stack.Screen
        name={RouteNames.updateByIdProduct}
        component={CreateProductScreen}
        options={getCustomHeaderOptions("BANCO")}
      />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
