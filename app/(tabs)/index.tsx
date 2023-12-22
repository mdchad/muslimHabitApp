import { format } from 'date-fns';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import Calendar from '../../components/calendar';
import Progress from '../../components/progress';
import { useHabit } from '../providers/HabitProvider';
import { ItemInfo, ListItem } from "../../components/listItem";
import { SortableList } from '../../components/SortableList';
import { Positions } from "../../components/SortableList/types";
import { useSharedValue } from "react-native-reanimated";

const PADDING = 6;
const HEIGHT = 80;
const ITEM_HEIGHT = HEIGHT + PADDING * 2;
const MAX_BORDER_RADIUS = 10;

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { habit } = useHabit();
  const { width: windowWidth } = useWindowDimensions();
  const { top: safeTop } = useSafeAreaInsets();

  const onDragEnd = useCallback((data: Positions) => {
    // onDragEnd is called when the user releases the item (if the item was moved)
    // The data argument contains the new positions of the items
    // The data is a map of index to height

    // Here's an example of how to get the new order of the items based on the data

    // Convert the map into an array of [index, height] pairs
    const heightArray = Object.entries(data).map(([index, height]) => [
      parseInt(index, 10),
      height,
    ]);

    // Sort the array based on the height (second element in each pair)
    heightArray.sort((a, b) => a[1] - b[1]);

    // Extract the sorted indices
    const newOrder = heightArray.map(([index]) => index);

    console.log({ newOrder });
  }, []);

  // Shared value for tracking the currently active index (the item that is being dragged)
  // This is used to update the border radius of the active item
  const currentActiveIndex = useSharedValue<number | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-seashell">
      <View className={styles.container}>
        <View className={styles.header}>
          <View className="flex flex-row space-x-2 items-center">
            <Text className={styles.title}>Today</Text>
            <Progress current={1} max={habit.length || 1} />
          </View>
          <Link href="/modal" asChild>
            <TouchableOpacity
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
              <PlusCircle color="black" size={28} />
            </TouchableOpacity>
          </Link>
        </View>
        <View className="mx-6">
          <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        </View>
        {habit.length ? (
          // <FlatList
          //   data={habit}
          //   renderItem={({ item, index }) => (
          //     <View className="flex flex-row shadow-sm bg-white p-4 mb-4 rounded-xl items-center justify-between">
          //       <View>
          //         <Text className="text-lg font-semibold">{item.name}</Text>
          //         <Text className="text-md text-gray-600">{item.interval}</Text>
          //       </View>
          //       <View>
          //         <Text className="font-[menlo]">1/5</Text>
          //       </View>
          //     </View>
          //   )}
          // />
          <SortableList
            onAnimatedIndexChange={(index) => {
              currentActiveIndex.value = index;
            }}
            onDragEnd={onDragEnd}
            // backgroundItem={
            //   // Kind of hacky way to make the background item have rounded corners
            //   <View
            //     style={[
            //       styles1.backgroundItem,
            //       {
            //         width: windowWidth - PADDING * 2,
            //       },
            //     ]}
            //   />
            // }
            className="px-6"
            showsVerticalScrollIndicator={false}
            data={habit}
            listItemHeight={ITEM_HEIGHT}
            // At the beginning I was thinking about using a FlatList
            // but unfortunately it doesn't work well while dragging
            // (because the zIndex of the items is not updated correctly)
            renderItem={({ item, index }) => {
              return (
                <ListItem
                  item={item}
                  style={{
                    height: HEIGHT,
                    margin: PADDING,
                    backgroundColor: 'white',
                  }}
                  maxBorderRadius={MAX_BORDER_RADIUS}
                  index={index}
                  activeIndex={currentActiveIndex}
                />
              );
            }}
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

const styles1 = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 50,
  },
  backgroundItem: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    borderRadius: MAX_BORDER_RADIUS,
    margin: PADDING,
  },
});


const styles = {
  header: `flex flex-row justify-between items-center mt-4 mx-6`,
  container: `flex-1`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-3xl font-bold mr-2`,
  description: `text-lg text-zinc-500`,
};
