import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Appointments, Bookmarks, Home, Settings } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const unstable_settings = {
  anchor: '(tabs)',
};

type RootStackParamList = {
  Home: undefined;
  Appointments: undefined;
  Bookmarks: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
