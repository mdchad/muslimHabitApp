import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Calendar from '../components/calendar';
import Carousel from '../components/carousel';
import { useState } from 'react';

const data = [
  { name: 'Solat', slug: 'solat', category: 'solat' },
  { name: 'Solat Khusyuk', slug: 'khusyuk', category: 'solat' },
  { name: 'Solat punctual', slug: 'punctual', category: 'solat' },
  { name: 'Solat at the mosque', slug: 'mosque', category: 'solat' },
  { name: 'Solat Rawatib', slug: 'rawatib', category: 'solat' },
  { name: 'Solat Dhuha', slug: 'dhuha', category: 'solat' },
  { name: 'Solat Tahajjud', slug: 'tahajjud', category: 'solat' },
  { name: 'Baca Quran', slug: 'baca', category: 'quran' },
];

export default function ModalScreen() {
  const [lists, setLists] = useState(data.filter((item) => item.category === 'solat'));

  function onSelectItem(selected) {
    const filterLists = data.filter((item) => item.category === selected.value);

    setLists(filterLists);
  }

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
        <Text className="text-4xl font-bold mb-6">Pick one!</Text>
        <View className="my-4">
          <Carousel onSelectItem={onSelectItem} />
        </View>
        <FlatList
          data={lists}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="bg-neutral-200/60 p-4 mb-4 rounded-xl"
              onPress={() => router.push({ pathname: '/modal2', params: { slug: item.slug } })}>
              <Text className="text-md font-semibold">{item.name}</Text>
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
};
