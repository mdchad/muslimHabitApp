import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className={styles.container}>
        <Link href="/paywall-modal" asChild>
          <TouchableOpacity className="border border-gray-200 p-4 rounded-xl bg-[#AEC3AE]">
            <Text className="text-white font-bold text-xl">Subscribe To Pro</Text>
            <Text className="text-white">Amazing features to help you grow</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: `my-2 mx-4 space-y-8`,
  container2: `space-y-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  header: `text-3xl font-bold mb-2`,
  title: `text-xl font-bold`,
  description: `text-lg leading-5 text-gray-400`,
};
