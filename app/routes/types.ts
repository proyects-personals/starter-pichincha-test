import { NavigationProp } from '@react-navigation/native';
import { RouteNames } from '../enums/routeNames';

export type NavigationScreens = {
  [RouteNames.ListProduct]: undefined;
};

export type AppNavigationProp = NavigationProp<NavigationScreens>;