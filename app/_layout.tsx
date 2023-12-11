import { Stack } from 'expo-router';
import { RevenueCatProvider } from "./providers/RevenueCatProvider";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <RevenueCatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/*<Stack.Screen name="(onboarding)" options={{ headerShown: false }} />*/}
        <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="modal2" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="paywall-modal" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
    </RevenueCatProvider>
  );
}
