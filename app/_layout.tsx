// import * as Application from 'expo-application';
// import * as Crypto from 'expo-crypto';
// import { Platform } from 'expo-modules-core';
import { Stack } from 'expo-router';
// import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

import { RevenueCatProvider } from './providers/RevenueCatProvider';
import { HabitProvider } from "./providers/HabitProvider";
// import { supabase } from '../utils/supabase';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// const getDeviceId = async () => {
//   if (Platform.OS === 'android') {
//     return Application.androidId;
//   } else {
//     let deviceId = await SecureStore.getItemAsync('deviceId');
//
//     if (!deviceId) {
//       deviceId = Crypto.randomUUID(); //or generate uuid
//       await SecureStore.setItemAsync('deviceId', deviceId);
//     }
//
//     console.log(deviceId);
//     return deviceId;
//   }
// };
//
// async function signUpWithEmail() {
//   const deviceId = await getDeviceId();
//   try {
//     const { data, error } = await supabase.auth.signUp({
//       email: `${deviceId}@muslimhabit.app`,
//       password: Crypto.randomUUID(),
//       options: {
//         data: {
//           guest_user: true,
//           full_name: 'admin',
//         },
//       },
//     });
//
//     console.log(data);
//     if (!data.session) console.log('Already signed up');
//   } catch (e) {
//     console.log('error', e);
//   }
// }

export default function RootLayout() {
  useEffect(() => {
    // signUpWithEmail();
  }, []);

  return (
    <RevenueCatProvider>
      <HabitProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/*<Stack.Screen name="(onboarding)" options={{ headerShown: false }} />*/}
          <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="modal2" options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen
            name="paywall-modal"
            options={{ presentation: 'modal', headerShown: false }}
          />
        </Stack>
      </HabitProvider>
    </RevenueCatProvider>
  );
}
