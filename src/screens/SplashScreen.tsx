/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigations/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList>;

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);
  return (
    <View style={styles.container}>
      <ImageBackground style={{width:'100%',height:'100%'}} resizeMode="contain" source={{uri:'https://rsp40.com/popupimage.jpg'}}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000',
  },
});
