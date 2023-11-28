import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';

import { useRevenueCat } from '../providers/RevenueCatProvider';

export default function ModalScreen() {
  const { purchasePackage, packages } = useRevenueCat();
  const onPurchase = (pack: PurchasesPackage) => {
    // Purchase the package
    purchasePackage!(pack);
  };

  return (
    <ScrollView className="flex-1 bg-stone-100">
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-10">
          <Link href="../" asChild>
            <TouchableOpacity onPress={() => {}}>
              <Text className="text-lg">Cancel</Text>
            </TouchableOpacity>
          </Link>
          <Text className="text-xl font-semibold">New Habit</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text className="text-lg">Save</Text>
          </TouchableOpacity>
        </View>

        {/*<View className="items-center my-5">*/}
        {/*  <View className="rounded-full bg-pink-200 p-6">*/}
        {/*    /!*<Image source={{ uri: 'path_to_your_emoji_image' }} className="w-20 h-20" />*!/*/}
        {/*  </View>*/}
        {/*  <View className="flex-row flex-wrap justify-center mt-5">*/}
        {/*    /!* Color options would go here, mapping through an array of color choices *!/*/}
        {/*    /!* Placeholder for color circles *!/*/}
        {/*    {Array.from({ length: 12 }).map((_, index) => (*/}
        {/*      <TouchableOpacity key={index} className="h-10 w-10 rounded-full m-1 bg-gray-300" />*/}
        {/*    ))}*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View style={styles1.container}>
          {packages.map((pack) => (
            <TouchableOpacity
              key={pack.identifier}
              onPress={() => onPurchase(pack)}
              style={styles1.button}>
              <View style={styles1.text}>
                <Text>{pack.product.title}</Text>
                <Text style={styles1.desc}>{pack.product.description}</Text>
              </View>
              <View style={styles1.price}>
                <Text>{pack.product.priceString}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/*<Paywall />*/}
    </ScrollView>
  );
}

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
