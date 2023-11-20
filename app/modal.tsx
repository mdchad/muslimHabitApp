import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, Pressable, Text, View } from 'react-native';

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
      <View className="flex flex-row items-center justify-between m-2">
        <Link href="../" asChild>
          <Pressable>
            <Text className="text-lg">Cancel</Text>
          </Pressable>
        </Link>
        {/*<Text className={styles.title}>New Habit</Text>*/}
        {/*<Text className="text-lg opacity-50">Save</Text>*/}
      </View>
      <View className="mt-4">
        <Text className="text-4xl font-bold mb-6">Pick a new one!</Text>
        {/*<Text className="text-2xl font-semibold">Solat</Text>*/}
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <Pressable
              className="bg-stone-200 p-4 mb-2 rounded-xl"
              onPress={() => router.push({ pathname: '/modal2', params: { slug: item.slug } })}>
              <Text className="text-lg font-semibold">{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = {
  container: `flex-1 m-2`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-semibold text-center`,
  listContainer: `bg-red-100`,
};
