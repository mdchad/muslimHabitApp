import * as React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { svgPathProperties } from 'svg-path-properties';

const _width = 50;
const _height = 72;
const _radius = _width * 0.4;
const _strokeWidth = 6;
const AnimatedPath = Animated.createAnimatedComponent(Path);

////////////////////
///////////// API //
////////////////////

type AnimatedDonutProps = {
  width?: number;
  height?: number;
  radius?: number;
  strokeColor?: string;
  strokeInactiveColor?: string;
  strokeWidth?: number;
  current?: number;
  max?: number;
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

function AnimatedDonut({
  width = _width,
  height = _height,
  radius = _radius,
  strokeColor = 'purple',
  strokeInactiveColor = 'red',
  strokeWidth = _strokeWidth,
  current = 2,
  max = 4,
  duration = 500,
  delay = 500,
  children,
  style,
}: AnimatedDonutProps) {
  const d = `
    M ${width / 2} 0
    H ${width - radius}
    C ${width} 0, ${width} ${radius}, ${width} ${radius}
    V ${height - radius}
    C ${width} ${height}, ${width - radius} ${height}, ${width - radius} ${height}
    H ${radius}
    C 0 ${height}, 0 ${height - radius}, 0 ${height - radius}
    V ${radius}
    C 0 0, ${radius} 0, ${radius} 0
    H ${width / 2}
  `;
  const wRatio = strokeWidth ? 1 - strokeWidth / width : 1;
  const hRatio = strokeWidth ? 1 - strokeWidth / height : 1;

  const properties = new svgPathProperties(d);
  const length = properties.getTotalLength();
  const animatedValue = useSharedValue(length);

  React.useEffect(() => {
    animatedValue.value = withDelay(
      delay,
      withTiming(length - (current * length) / max, { duration })
    );
  }, [duration, max, current]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: animatedValue.value,
    };
  });

  return (
    <View style={[style, { width, height }]}>
      <Svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <Path
          id="s"
          originX={width / 2}
          originY={height / 2}
          scaleX={wRatio}
          scaleY={hRatio}
          strokeWidth={strokeWidth}
          d={d}
          fill="transparent"
          stroke={strokeInactiveColor}
          strokeLinejoin="miter"
          strokeMiterlimit={0}
        />
        <AnimatedPath
          id="s"
          originX={width / 2}
          originY={height / 2}
          scaleX={wRatio}
          scaleY={hRatio}
          strokeWidth={strokeWidth}
          d={d}
          fill="transparent"
          stroke={strokeColor}
          strokeDasharray={length}
          // strokeLinecap='butt'
          strokeLinejoin="miter"
          strokeMiterlimit={0}
          strokeLinecap="round"
          animatedProps={animatedProps}
        />
      </Svg>
      <View
        style={[
          {
            top: strokeWidth,
            left: strokeWidth,
            right: strokeWidth,
            bottom: strokeWidth,
            position: 'absolute',
            borderRadius: radius - strokeWidth * 2,
          },
        ]}>
        {children}
      </View>
    </View>
  );
}

//////////////////////
///////////// Usage //
//////////////////////

const _colors = {
  bg: '#232839',
  inactive: '#fff',
  active: '#8716',
};

export default function Progress() {
  return (
    <AnimatedDonut
      key="item-#1"
      current={36}
      max={120}
      strokeColor={_colors.active}
      strokeInactiveColor={_colors.inactive}
      strokeWidth={5 / 1.8}
      width={62 / 2}
      height={86 / 2}
      radius={(62 * 0.4) / 2}
      delay={400 + (300 * 1) / 2}
      duration={400}
      // style={{marginRight: 20}}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text className="text-xs font-bold text-center">{11}</Text>
        <View
          style={{
            height: 2,
            width: '50%',
            backgroundColor: _colors.active,
            transform: [{ rotate: '-14deg' }],
          }}
        />
        <Text className="text-[10px] font-bold text-center text-gray-500">{20}</Text>
      </View>
    </AnimatedDonut>
  );
}
