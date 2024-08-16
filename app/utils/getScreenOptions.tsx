import { StackNavigationOptions } from '@react-navigation/stack';

export const getScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
    },
    headerTitle: '',
  };
};