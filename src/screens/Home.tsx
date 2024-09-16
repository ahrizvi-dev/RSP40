import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/Home.style';
import React from 'react';
import Menu from '../components/Menu';
import Carousel from '../components/MyCarousal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import LinearGradient from 'react-native-linear-gradient';
import { screensData } from '../../staticData';

type homeScreenProps = NativeStackScreenProps<RootStackParamList>;



const Home: React.FC<homeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <FlatList
      showsVerticalScrollIndicator={false}
        data={screensData}
        columnWrapperStyle={styles.columWrapperStyle}
        numColumns={2}
        keyExtractor={item => item.id}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => (
          <>
            <View>
              <Carousel />
            </View>
            <View style={styles.line} />
          </>
        )}
        renderItem={({item}) => (
          <LinearGradient
            colors={['#059DFF', '#E33FA1']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.pagesDiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route)}
              style={styles.page}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
