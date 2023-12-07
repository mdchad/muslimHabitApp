import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';

import { useRevenueCat } from '../providers/RevenueCatProvider';

function Paywall() {
  const { user, packages, purchasePackage, restorePermissions } = useRevenueCat();

  const onPurchase = (pack: PurchasesPackage) => {
    // Purchase the package
    purchasePackage!(pack);
  };

  return (
    <ScrollView>
      {/* Display the packages */}
      <View style={styles.container}>
        {packages.map((pack) => (
          <TouchableOpacity
            key={pack.identifier}
            onPress={() => onPurchase(pack)}
            style={styles.button}>
            <View style={styles.text}>
              <Text>{pack.product.title}</Text>
              <Text style={styles.desc}>{pack.product.description}</Text>
            </View>
            <View style={styles.price}>
              <Text>{pack.product.priceString}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display the user state */}
      {/*<User user={user} />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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

export default Paywall;
