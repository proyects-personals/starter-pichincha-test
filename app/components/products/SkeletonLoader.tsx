import useShimmerAnimation from '@/app/hooks/useShimmerAnimation';
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  skeletonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    height: 64,
  },
  skeletonText: {
    flex: 1,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  shimmerEffect: {
    height: '100%',
    width: 60,
    backgroundColor: '#f0f0f0',
    opacity: 0.4,
  },
});

const SkeletonLoader = () => {
  const { translateX } = useShimmerAnimation();

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.skeletonItem}>
          <View style={styles.skeletonText}>
            <Animated.View
              style={[
                styles.shimmerEffect,
                {
                  transform: [{ translateX }],
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default SkeletonLoader;
