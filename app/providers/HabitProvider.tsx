import { createContext, useContext, useState } from 'react';

interface HabitProps {
  habit: any
}

const HabitContext = createContext<HabitProps | null>(null);

// Provide RevenueCat functions to our app
export const HabitProvider = ({ children }: any) => {
  const [habit, setHabit] = useState([]);
  // Load all offerings a user can (currently) purchase
  const value = {
    habit,
    setHabit
  };

  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>;
};

// Export context for easy usage
export const useHabit = () => {
  return useContext(HabitContext);
};
