import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';

import { useRevenueCat } from '../providers/RevenueCatProvider';

const APIKeys = {
  apple: 'appl_ZbrCDDGMynmPzkCEpbniWjlKOGG',
  google: 'your_revenuecat_google_api_key',
};

export default function Paywall() {
  const { user, packages, purchasePackage, restorePermissions } = useRevenueCat();

  const onPurchase = (pack: PurchasesPackage) => {
    // Purchase the package
    purchasePackage!(pack);
  };

  return (
    <View className="mx-4 space-y-4">
      {/*<Text>Current Offering: {currentOffering.identifier}</Text>*/}
      {/*<Text>Package Count: {currentOffering.availablePackages.length}</Text>*/}
      {packages.map((pkg, i) => {
        return (
          <TouchableOpacity
            onPress={() => onPurchase(pkg)}
            className="flex flex-row justify-between"
            key={pkg.identifier}>
            <View>
              <Text>{pkg.product.title}</Text>
              <Text>{pkg.product.description}</Text>
            </View>
            <View>
              <Text>{pkg.product.priceString}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
