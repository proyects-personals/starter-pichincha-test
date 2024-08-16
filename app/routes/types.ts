import { NavigationProp } from '@react-navigation/native';
import { RouteNames } from '../enums/routeNames';

export type NavigationScreens = {
  [RouteNames.ListProduct]: undefined;
  [RouteNames.createProduct]: undefined;
};

export type AppNavigationProp = NavigationProp<NavigationScreens>;