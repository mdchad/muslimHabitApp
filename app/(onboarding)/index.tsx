
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimatedBox = () => {
  // Shared values for left and right animations
  const leftPosition = useSharedValue(-200); // Start off-screen to the left
  const rightPosition = useSharedValue(200); // Start off-screen to the right
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(20);

  // Animated styles
  const leftAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: leftPosition.value }, { rotate: `${rotate.value}deg` }],
      opacity: opacity.value,
    };
  });

  const rightAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: rightPosition.value }, { rotate: `${rotate.value + 25}deg` }],
    };
  });

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    leftPosition.value = withTiming(0, { duration: 700 }); // Slide in from left
    rightPosition.value = withTiming(0, { duration: 700 }); // Slide in from right
    opacity.value = withTiming(1, { duration: 900 });
    rotate.value = withTiming(-10, { duration: 700 }); // Use spring animation for rotation
  };

  // Function to reset and restart the animation
  const resetAnimation = () => {
    // Reset shared values to initial state
    leftPosition.value = -200;
    rightPosition.value = 200;
    opacity.value = 0;
    rotate.value = 20;

    // Start the animation
    startAnimation();
  };

  useEffect(() => {
    // Animate the boxes to slide in
    startAnimation();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Boxes sliding in from the left */}
        <Animated.View style={[leftAnimatedStyle]}>
          <Animated.View style={[styles.box]} />
          <Animated.View style={[styles.box]} />
        </Animated.View>

        {/* Boxes sliding in from the right */}
        <Animated.View style={[rightAnimatedStyle]}>
          <Animated.View style={[styles.box]} />
          <Animated.View style={[styles.box]} />
        </Animated.View>
      </View>
      <Pressable onPress={() => resetAnimation()}>
        <Text>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Layout styles for the container
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
  },
});

export default AnimatedBox;