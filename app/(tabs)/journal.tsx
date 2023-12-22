import { Text, View, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className={styles.container}>
      <Text className="text-3xl font-bold">Journal</Text>
      <Text className="text-lg">Coming Soon</Text>
    </View>
  );
}

const styles = {
  container: `items-center flex-1 justify-center bg-seashell`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
