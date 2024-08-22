import { StatusBar } from 'expo-status-bar';
import Routes from "./routes/Routes";

export default function Page() {
  return (
    <><StatusBar translucent hidden backgroundColor="transparent" /><Routes /></>
  );
}
