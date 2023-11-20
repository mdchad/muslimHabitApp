import { Tabs } from 'expo-router';
import { BookOpenIcon, HomeIcon, LibraryBigIcon } from "lucide-react-native";

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
        name="two"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <LibraryBigIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color }) => <BookOpenIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}