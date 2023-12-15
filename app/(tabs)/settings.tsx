import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ZapIcon } from "lucide-react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-seashell">
      <View className={styles.container}>
        <Link href="/paywall-modal" asChild>
          <TouchableOpacity className="p-4 rounded-xl bg-[#f4e6ff] flex flex-row items-center space-x-2">
            <ZapIcon size={30} color="#913dd1" />
            <View>
              <Text className="text-[#913dd1] font-bold text-xl">Subscribe To Pro</Text>
              <Text className="text-[#913dd1]">Amazing features to help you grow</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: `my-6 mx-4 space-y-8`,
  container2: `space-y-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  header: `text-3xl font-bold mb-2`,
  title: `text-xl font-bold`,
  description: `text-lg leading-5 text-gray-400`,
};

