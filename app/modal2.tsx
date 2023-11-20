import { Link, useGlobalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, Text, View } from 'react-native';

export default function ModalScreen() {
  const params = useGlobalSearchParams();

  return (
    <View className={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View className="flex flex-row items-center justify-between m-2">
        <Link href="../" asChild>
          <Pressable className="">
            <Text className="text-lg">Cancel</Text>
          </Pressable>
        </Link>
        <Text className={styles.title}>New Habit11 {params.slug}</Text>
        <Text className="text-lg opacity-50">Save</Text>
      </View>
    </View>
  );
}

const styles = {
  container: `flex-1 m-2`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-semibold text-center`,
};
