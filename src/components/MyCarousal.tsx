import React, { useEffect, useRef } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  {
    id: '1',
    image: 'http://rsp.viewdemo.live/assets/images/banner/Registration.png',
  },
  {
    id: '2',
    image:
      'http://rsp.viewdemo.live/assets/images/banner/Abstract%20Submission.png',
  },
  {
    id: '3',
    image: 'http://rsp.viewdemo.live/assets/images/banner/Main%20Banner.png',
  },
  {
    id: '4',
    image:
      'http://rsp.viewdemo.live/assets/images/banner/Sponsorship%20Tariff.png',
  },
];

const MyCarousel: React.FC = () => {
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextOffset =
          (scrollX.value + screenWidth) % (screenWidth * data.length);
        scrollViewRef.current.scrollTo({
          x: nextOffset,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollX]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: 200,
    height: 200,
    aspectRatio: 2.1,
  },
});

export default MyCarousel;
