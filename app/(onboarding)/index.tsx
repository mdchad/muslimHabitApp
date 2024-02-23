// import { MotiView, useAnimationState } from 'moti';
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Pressable, Text } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';
//
// import BoxSVG from '../svg/box';
// import ArrowSVG from "../svg/arrow";
//
// const AnimatedBox = () => {
//   const [key, setKey] = useState(1);
//   // Shared values for left and right animations
//   const leftPosition = useSharedValue(-200); // Start off-screen to the left
//   const rightPosition = useSharedValue(200); // Start off-screen to the right
//   const opacity = useSharedValue(0);
//   const rotate = useSharedValue(20);
//
//   // Animated styles
//   const leftAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: leftPosition.value }, { rotate: `${rotate.value}deg` }],
//       opacity: opacity.value,
//     };
//   });
//
//   const rightAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       transform: [{ translateX: rightPosition.value }, { rotate: `${rotate.value + 25}deg` }],
//     };
//   });
//
//   useEffect(() => {
//     startAnimation();
//   }, []);
//
//   const startAnimation = () => {
//     leftPosition.value = withTiming(0, { duration: 700 }); // Slide in from left
//     rightPosition.value = withTiming(0, { duration: 700 }); // Slide in from right
//     opacity.value = withTiming(1, { duration: 900 });
//     rotate.value = withTiming(-10, { duration: 700 }); // Use spring animation for rotation
//   };
//
//   // Function to reset and restart the animation
//   const resetAnimation = () => {
//     setKey((prev) => prev + 1);
//     // Reset shared values to initial state
//     leftPosition.value = -200;
//     rightPosition.value = 200;
//     opacity.value = 0;
//     rotate.value = 20;
//
//     // Start the animation
//     startAnimation();
//   };
//
//   useEffect(() => {
//     // Animate the boxes to slide in
//     startAnimation();
//   }, []);
//
//   const motiLeftAnimate = {
//     from: { opacity: 0, left: -200, rotate: '20deg' },
//     animate: { opacity: 1, left: 0, rotate: '-10deg' },
//     transition: {
//       type: 'timing',
//       duration: 500,
//     },
//   };
//
//   const motiRightAnimate = {
//     from: { opacity: 0, right: -200, rotate: '45deg' },
//     animate: { opacity: 1, right: 0, rotate: '20deg' },
//     transition: {
//       type: 'timing',
//       duration: 500,
//     },
//   };
//
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         {/* Boxes sliding in from the left */}
//         {/*<MotiView key={`top-${key}`} {...motiLeftAnimate}>*/}
//         {/*  <ArrowSVG key={`key-${key}`}/>*/}
//           <BoxSVG key={`key1-${key}`} />
//           {/*<Animated.View style={[styles.box]} />*/}
//           {/*<Animated.View style={[styles.box]} />*/}
//         {/*</MotiView>*/}
//
//         {/* Boxes sliding in from the right */}
//         <MotiView key={`bottom-${key}`} {...motiRightAnimate}>
//           {/*<BoxSVG />*/}
//           {/*<Animated.View style={[styles.box]} />*/}
//           {/*<Animated.View style={[styles.box]} />*/}
//         </MotiView>
//       </View>
//       <Pressable onPress={() => resetAnimation()}>
//         <Text>Reset</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     // Layout styles for the container
//     // flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     borderColor: 'grey',
//     borderWidth: 1,
//     margin: 10,
//   },
// });
//
// export default AnimatedBox;
