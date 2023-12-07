import { Tabs } from 'expo-router';
import { BookOpenIcon, HomeIcon, LibraryBigIcon, SettingsIcon } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: false,
          title: 'Discover',
          tabBarIcon: ({ color }) => <LibraryBigIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          headerShown: false,
          title: 'Journal',
          tabBarIcon: ({ color }) => <BookOpenIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingsIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}