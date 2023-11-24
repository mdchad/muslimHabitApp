import { format, getHours } from 'date-fns';
import * as Haptics from 'expo-haptics';
import { Link, router } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';
import { SafeAreaView } from 'react-native-safe-area-context';

import Calendar from '../../components/calendar';
import Progress from '../../components/progress';
// import { useRevenueCat } from '../../providers/RevenueCatProvider';

export default function TabOneScreen() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  // const { purchasePackage } = useRevenueCat();

  const list = [{ name: 'Solat', slug: 'solat' }];

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

  // const onPurchase = (pack: PurchasesPackage) => {
  //   // Purchase the package
  //   purchasePackage!(pack);
  // };

  return (
    <SafeAreaView className="flex-1">
      <View className={styles.container}>
        <View className={styles.header}>
          <View className="flex flex-row space-2-4 items-center">
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
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <View className="flex flex-row bg-stone-200/50 p-4 mb-4 rounded-xl items-center justify-between">
              <View>
                <Text className="text-lg font-semibold">{item.name}</Text>
                <Text className="text-md text-gray-600">Every day</Text>
              </View>
              <View>
                <Text>1/5</Text>
              </View>
            </View>
          )}
        />
      </View>
      {/*<View style={styles1.container}>*/}
      {/*  {packages.map((pack) => (*/}
      {/*    <TouchableOpacity*/}
      {/*      key={pack.identifier}*/}
      {/*      onPress={() => onPurchase(pack)}*/}
      {/*      style={styles1.button}>*/}
      {/*      <View style={styles1.text}>*/}
      {/*        <Text>{pack.product.title}</Text>*/}
      {/*        <Text style={styles1.desc}>{pack.product.description}</Text>*/}
      {/*      </View>*/}
      {/*      <View style={styles1.price}>*/}
      {/*        <Text>{pack.product.priceString}</Text>*/}
      {/*      </View>*/}
      {/*    </TouchableOpacity>*/}
      {/*  ))}*/}
      {/*</View>*/}
      {/*<Progress />*/}
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

const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 6,
  },
  button: {
    padding: 12,
    borderRadius: 4,
    margin: 4,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
  },
  text: {
    flexGrow: 1,
  },
  desc: {
    color: '#B6B7C0',
    paddingVertical: 4,
  },
  price: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    borderColor: '#EA3C4A',
  },
});
