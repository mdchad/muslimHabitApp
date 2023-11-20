import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { addDays, format, startOfToday } from 'date-fns';

import Date from './date';

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<string>('Jan');

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const today = startOfToday();
    const _dates = Array.from({ length: 10 }, (_, i) => addDays(today, i));
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  const getCurrentMonth = () => {
    if (dates.length) {
      const month = format(addDays(dates[0], Math.floor(scrollPosition / 60)), 'MMMM');
      setCurrentMonth(month);
    }
  };

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition, dates]);

  return (
    <View style={styles.dateSection}>
      <View style={styles.scroll} className="space-x-2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}>
          {dates.map((date, index) => (
            <Date
              key={index}
              index={index}
              date={format(date, 'yyyy-MM-dd')}
              onSelectDate={onSelectDate}
              selected={selected}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  dateSection: {
    width: '100%',
  },
  scroll: {
    height: 100,
  },
});
