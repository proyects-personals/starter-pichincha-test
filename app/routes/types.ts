import { NavigationProp } from '@react-navigation/native';
import { RouteNames } from '../enums/routeNames';
import { ProductFinancial } from '../interface/ProductFinancial';

export type NavigationScreens = {
  [RouteNames.ListProduct]: undefined;
  [RouteNames.createProduct]: undefined;
  [RouteNames.updateProduct]: { product: ProductFinancial };
};

export type AppNavigationProp = NavigationProp<NavigationScreens>;
