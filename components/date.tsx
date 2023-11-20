import { format, isToday, parseISO } from 'date-fns';
import { Text, View, Pressable } from 'react-native';

const Date = ({ date, onSelectDate, selected, index }) => {
  // Parse the ISO date string
  const parsedDate = parseISO(date);

  // Check if the date is today, if so, show 'Today', otherwise show the day of the week
  const day = format(parsedDate, 'eee');

  // Get the day number
  const dayNumber = format(parsedDate, 'd');

  // Format the full date for comparison
  const fullDate = format(parsedDate, 'yyyy-MM-dd');

  return (
    <Pressable
      onPress={() => onSelectDate(fullDate)}
      className={`rounded-xl ${
        index === 0 ? 'py-4 mr-4' : 'p-4'
      } h-[90px] width-[80px] space-y-1 items-center`}>
      <Text
        className={`font-semibold text-lg ${
          selected === fullDate ? 'text-black' : 'text-zinc-300'
        }`}>
        {day}
      </Text>
      {/*<View style={{ height: 10 }} />*/}
      <View className={`${selected === fullDate ? 'bg-stone-200' : ''} p-2 rounded-xl`}>
        <Text
          className={`text-md font-semibold ${
            selected === fullDate ? 'text-black' : 'text-zinc-300'
          }`}>
          {dayNumber}
        </Text>
      </View>
    </Pressable>
  );
};

export default Date;

const styles = {
  card: `rounded-xl h-[90px] width-[80px] space-y-2`,
  // card: {
  //   // backgroundColor: '#eee',
  //   borderRadius: 10,
  //   borderColor: '#ddd',
  //   padding: 10,
  //   marginVertical: 10,
  //   alignItems: 'center',
  //   height: 90,
  //   width: 80,
  //   marginHorizontal: 5,
  // },
  big: `font-bold`,
  medium: `text-md`,
};
