import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

const Carousel = ({ onSelectItem, selected }) => {
  const [items, setItems] = useState([
    {
      title: 'Solat',
      value: 'solat',
      bg: 'bg-white',
      color: 'text-black',
    },
    {
      title: 'Quran',
      value: 'quran',
      bg: 'bg-black',
      color: 'text-white',
    },
    {
      title: 'Dua',
      value: 'dua',
      bg: 'bg-red-700',
      color: 'text-red-100',
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  function onCheckedChange() {

  }

  return (
    <View style={styles.dateSection}>
      <View className="space-x-2">
        <ScrollView
          horizontal
          className="space-x-4"
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}>
          {items.map((item, index) => (
            <Pressable
              onPress={() => onSelectItem(item)}
              key={index}
              className={`h-56 w-32 rounded-2xl flex justify-center items-center ${item.bg}`}>
              <Text className={`font-semibold text-2xl ${item.color}`}>{item.title}</Text>
              {/*<View style={{ height: 10 }} />*/}
              {/*<View className={`${selected === fullDate ? 'bg-[#191101]' : ''} p-2 rounded-xl`}>*/}
              {/*  <Text*/}
              {/*    className={`text-md font-semibold ${*/}
              {/*      selected === item ? 'text-white' : 'text-neutral-500/40'*/}
              {/*    }`}>*/}
              {/*    {dayNumber}*/}
              {/*  </Text>*/}
              {/*</View>*/}
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  dateSection: {
    width: '100%',
  },
});
