import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';

import { useRevenueCat } from './providers/RevenueCatProvider';

export default function ModalScreen() {
  const { purchasePackage, packages, restorePermissions } = useRevenueCat();
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
        </View>
        <View className="mb-4">
          <Text className="text-3xl font-bold">Unlock Everything</Text>
          <Text className="text-lg">Don't just track habits</Text>
        </View>

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
                <Text className="text-white font-bold">{pack.product.priceString}</Text>
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
    borderRadius: 10,
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
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: '#739072',
  },
});
