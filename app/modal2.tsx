import { Link, router, useGlobalSearchParams } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useHabit } from "./providers/HabitProvider";

export default function ModalScreen() {
  const params = useGlobalSearchParams();
  const { setHabit } = useHabit()

  function onSubmit() {
    setHabit((prev) => [...prev, { name: params?.slug, interval: 'everyday' }])
    router.navigate({ pathname: '/(tabs)/' })
  }

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
          <TouchableOpacity onPress={onSubmit}>
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

        <View className="space-y-8">
          <View>
            <Text className="ml-3 mb-1 text-gray-500">NAME</Text>
            <TextInput
              placeholder="Name"
              value={params?.slug}
              style={{ fontSize: 18 }}
              className="bg-white py-3 px-3 rounded-lg"
            />
          </View>
          <View>
            <Text className="ml-3 mb-1 text-gray-500">DESCRIPTION</Text>
            <TextInput
              style={{ fontSize: 18 }}
              className="bg-white py-3 px-3 rounded-lg"
            />
          </View>
          <View className="flex-row justify-between items-center my-5">
            <Text className="text-lg">Interval</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text className="text-lg">Every day</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="my-5">
          <Text className="text-blue-500">More features soon</Text>
          <Text className="text-sm text-gray-500">The app is in active development phase. Richer interval options, Reminders, etc., will be added over time.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: `flex-1 m-2`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-semibold text-center`,
};
