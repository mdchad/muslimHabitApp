import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import Purchases, { PurchasesOffering } from 'react-native-purchases';

const APIKeys = {
  apple: 'appl_ZbrCDDGMynmPzkCEpbniWjlKOGG',
  google: 'your_revenuecat_google_api_key',
};

export default function Paywall() {
  const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);

  useEffect(() => {
    const setup = async () => {
      // if (Platform.OS == "android") {
      //   await Purchases.configure({ apiKey: APIKeys.google });
      // } else {
      await Purchases.configure({ apiKey: APIKeys.apple });
      // }

      const offerings = await Purchases.getOfferings();
      setCurrentOffering(offerings.current);
    };


    setup().catch(console.log);
  }, []);

  if (!currentOffering) {
    return <Text>'Loading...';</Text>
  } else {
    return (
      <View>
        <Text>Current Offering: {currentOffering.identifier}</Text>
        <Text>Package Count: {currentOffering.availablePackages.length}</Text>
        {currentOffering.availablePackages.map((pkg, i) => {
          return <Text key={i}>{pkg.product.identifier}</Text>;
        })}
      </View>
    );
  }
}
