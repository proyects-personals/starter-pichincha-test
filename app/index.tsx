import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from "./routes/Routes";

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar translucent hidden backgroundColor="transparent" />
      <Routes />
    </NavigationContainer>
  );
}
