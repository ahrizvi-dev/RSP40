/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {useRef, useState, useEffect} from 'react';
import {View, Image, FlatList, Dimensions} from 'react-native';
import Abstract from '../assets/images/AbstractSubmission.png';
import MainBanner from '../assets/images/MainBanner.png';

const { width } = Dimensions.get('window');

interface carousalTypes {
  id: string;
  image: any;
}

const data: carousalTypes[] = [
  {
    id: '1',
    image: Abstract,
  },
  {
    id: '2',
    image: MainBanner,
  },
  // Add more images if needed
];

const MyCarousel: React.FC = () => {
  const flatListRef = useRef<FlatList>(null); // Reference to control FlatList
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically scroll to the next item
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000); // Adjust the interval (3000ms = 3 seconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image
            style={{width, height: 200, aspectRatio: 2.1}}
            source={item.image}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          // If the index is out of bounds, fallback to scrolling to the start
          flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
        }}
      />
    </View>
  );
};

export default MyCarousel;
