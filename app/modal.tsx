import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, Pressable, Text, TouchableOpacity, View } from 'react-native';

const list = [
  { name: 'Solat', slug: 'solat' },
  { name: 'Solat Khusyuk', slug: 'khusyuk' },
  { name: 'Solat punctual', slug: 'punctual' },
  { name: 'Solat at the mosque', slug: 'mosque' },
  { name: 'Solat Rawatib', slug: 'rawatib' },
  { name: 'Solat Dhuha', slug: 'dhuha' },
  { name: 'Solat Tahajjud', slug: 'tahajjud' },
];

export default function ModalScreen() {
  return (
    <View className={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View className="flex flex-row items-center justify-between my-2">
        <Link href="../" asChild>
          <Pressable>
            <Text className="text-lg">Cancel</Text>
          </Pressable>
        </Link>
      </View>
      <View className="mt-4">
        <Text className="text-4xl font-bold mb-6">Pick a new one!</Text>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="bg-stone-50 p-4 mb-4 rounded-xl"
              onPress={() => router.push({ pathname: '/modal2', params: { slug: item.slug } })}>
              <Text className="text-lg font-semibold">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = {
  container: `flex-1 my-2 mx-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-semibold text-center`,
  listContainer: `bg-red-100`,
};
