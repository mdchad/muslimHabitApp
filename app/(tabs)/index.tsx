import { format } from 'date-fns';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Calendar from '../../components/calendar';
import Progress from '../../components/progress';

export default function TabOneScreen() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const list = [
    // { name: 'Solat', slug: 'solat' },
    // { name: 'Zakat', slug: 'zakat' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-seashell">
      <View className={styles.container}>
        <View className={styles.header}>
          <View className="flex flex-row space-x-2 items-center">
            <Text className={styles.title}>Today</Text>
            <Progress />
          </View>
          <Link href="/modal" asChild>
            <TouchableOpacity
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
              <PlusCircle color="black" size={26} />
            </TouchableOpacity>
          </Link>
        </View>
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        {list.length ? (
          <FlatList
            data={list}
            renderItem={({ item, index }) => (
              <View className="flex flex-row shadow-sm bg-white p-4 mb-4 rounded-xl items-center justify-between">
                <View>
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <Text className="text-md text-gray-600">Every day</Text>
                </View>
                <View>
                  <Text className="font-[menlo]">1/5</Text>
                </View>
              </View>
            )}
          />
        ) : (
          <View className="flex space-y-4 h-full items-center justify-center">
            <View className="flex items-center">
              <Text className="text-2xl font-bold leading-6">No Habit yet</Text>
              <Text className="text-lg text-neutral-700">Create your first habit</Text>
            </View>
            <Link href="/modal" asChild>
              <TouchableOpacity className="bg-y3 py-2 px-4 rounded-xl">
                <Text className="text-lg font-semibold font-[menlo]">Get Started</Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = {
  header: `flex flex-row justify-between items-center mt-4`,
  container: `flex-1 mx-6`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-3xl font-bold mr-2`,
  description: `text-lg text-zinc-500`,
};
