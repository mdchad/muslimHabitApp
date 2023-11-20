import { format } from 'date-fns';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DiscoverScreen() {
  const routines = ['Morning routine', 'Getting started', 'After Work'];

  return (
    <SafeAreaView className="flex-1">
      <View className={styles.container}>
        <View className={styles.container2}>
          <Text className={styles.header}>Discover</Text>
          <Text className={styles.title}>Routines</Text>
          <Text className={styles.description}>
            Our curated routines will help you to get started quickly
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}>
            {routines.map((routine, index) => (
              <View key={index} className="flex items-center w-[150px] p-8 bg-stone-200 rounded-xl mr-4">
                <Text className="text-xl font-semibold">{routine}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View>
          <Text className={styles.title}>Collections</Text>
        </View>
        {/*<View>*/}
        {/*  <Text className={styles.title}>Habits</Text>*/}
        {/*</View>*/}
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
