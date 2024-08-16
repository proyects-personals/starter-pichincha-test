import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useShimmerAnimation = (duration: number = 1500) => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [shimmerAnimation, duration]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 120],
  });

  return { translateX };
};

export default useShimmerAnimation;
