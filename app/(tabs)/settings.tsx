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
        <Link href="/modal2" asChild>
          <TouchableOpacity className="p-4 rounded-xl bg-[#dcf7e1] flex flex-row items-center space-x-2">
            <ZapIcon size={30} color="#39963f" />
            <View>
              <Text className="text-[#39963f] font-bold text-xl">About us</Text>
              <Text className="text-[#39963f]">Amazing features to help you grow</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/modal2" asChild>
          <TouchableOpacity className="p-4 rounded-xl bg-[#ffe6e6] flex flex-row items-center space-x-2">
            <ZapIcon size={30} color="#d13d3d" />
            <View>
              <Text className="text-[#d13d3d] font-bold text-xl">About us</Text>
              <Text className="text-[#d13d3d]">Amazing features to help you grow</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/modal2" asChild>
          <TouchableOpacity className="p-4 rounded-xl bg-[#e6eaff] flex flex-row items-center space-x-2">
            <ZapIcon size={30} color="#493dd1" />
            <View>
              <Text className="text-[#493dd1] font-bold text-xl">About us</Text>
              <Text className="text-[#493dd1]">Amazing features to help you grow</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: `my-6 mx-4 space-y-4`,
  container2: `space-y-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  header: `text-3xl font-bold mb-2`,
  title: `text-xl font-bold`,
  description: `text-lg leading-5 text-gray-400`,
};

