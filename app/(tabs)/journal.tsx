import { useCallback } from 'react';
import { Text, useWindowDimensions, View, StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SortableList } from '../../components/SortableList';
import { Positions } from '../../components/SortableList/types';

const PADDING = 6;
const HEIGHT = 80;
const ITEM_HEIGHT = HEIGHT + PADDING * 2;
const MAX_BORDER_RADIUS = 10;

import type { ItemInfo } from './components/ListItem';
import { ListItem } from "../../components/listItem";

export const ITEMS: ItemInfo[] = [
  {
    title: 'Meditation',
    subtitle: 'Every day',
    activeValues: [true, false, false, true, false],
    color: 'rgba(238, 130, 238, 0.2)',
    squareColor: 'rgba(238, 130, 238, 0.5)',
    textIcon: '🧘',
  },
  {
    title: 'Coding',
    subtitle: 'Every day',
    activeValues: [true, false, true, true, false],
    color: 'rgba(0, 0, 255, 0.2)',
    squareColor: 'rgba(0, 0, 255, 0.3)',
    textIcon: '💻',
  },
  {
    title: 'Workout',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, false],
    color: 'rgba(0, 105, 0, 0.2)',
    squareColor: 'rgba(0, 105, 0, 0.3)',
    textIcon: '🏋️‍♀️',
  },
  {
    title: 'Reading',
    subtitle: 'Every day',
    activeValues: [true, true, false, true, true],
    color: 'rgba(255, 0, 0, 0.2)',
    squareColor: 'rgba(255, 0, 0, 0.2)',
    textIcon: '📖',
  },
  {
    title: 'Sleep',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(0, 200, 210, 0.2)',
    squareColor: 'rgba(0, 200, 210, 0.4)',
    textIcon: '😴',
  },
  {
    title: 'Eat healthy',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(255, 150, 0, 0.2)',
    squareColor: 'rgba(255, 150, 0, 0.5)',
    textIcon: '🥗',
  },
  {
    title: 'Drink water',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(0, 100, 0, 0.2)',
    squareColor: 'rgba(0, 100, 0, 0.4)',
    textIcon: '🚰',
  },
  {
    title: 'Walk',
    subtitle: 'Every day',
    activeValues: [true, false, true, false, true],
    color: 'rgba(0, 0, 100, 0.2)',
    squareColor: 'rgba(0, 0, 100, 0.4)',
    textIcon: '🚶',
  },
  {
    title: 'Playing Piano',
    subtitle: 'Every day',
    activeValues: [true, false, true, true, true],
    color: 'rgba(0, 0, 200, 0.2)',
    squareColor: 'rgba(0, 0, 200, 0.4)',
    textIcon: '🎹',
  },
];


export default function TabTwoScreen() {
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
    // <View className={styles.container}>
    //   <Text className="text-3xl font-bold">Journal</Text>
    //   <Text className="text-lg">Coming Soon</Text>
    // </View>
    <View>
      <SortableList
        style={{
          paddingTop: safeTop,
        }}
        onAnimatedIndexChange={(index) => {
          currentActiveIndex.value = index;
        }}
        onDragEnd={onDragEnd}
        backgroundItem={
          // Kind of hacky way to make the background item have rounded corners
          <View
            style={[
              styles1.backgroundItem,
              {
                width: windowWidth - PADDING * 2,
              },
            ]}
          />
        }
        showsVerticalScrollIndicator={false}
        data={ITEMS}
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
    </View>
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
  container: `items-center flex-1 justify-center bg-seashell`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
