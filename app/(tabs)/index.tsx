import { format, getHours } from 'date-fns';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Calendar from '../../components/calendar';

export default function TabOneScreen() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  // const greeting = useMemo(() => {
  //   const currentHour = getHours(new Date());
  //   if (currentHour < 12) {
  //     return 'Good Morning';
  //   } else if (currentHour < 18) {
  //     return 'Good Afternoon';
  //   } else {
  //     return 'Good Evening';
  //   }
  // }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className={styles.container}>
        <View className={styles.header}>
          <Text className={styles.title}>Today</Text>
          <Link href="/modal" asChild>
            <TouchableOpacity
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
              <PlusCircle color="black" size={26} />
            </TouchableOpacity>
          </Link>
        </View>
        {/*<Text className={styles.title}>{greeting}, Irsyad</Text>*/}
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  header: `flex flex-row justify-between items-center mt-4`,
  container: `flex-1 mx-6`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-3xl font-bold`,
  description: `text-lg text-zinc-500`,
};
