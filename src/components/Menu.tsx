import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:'http://rsp.viewdemo.live/assets/images/banner/logo1.png'}}/>
      {/* <Text>LOGO</Text> */}
      <View style={styles.btnDiv}>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Button btnText={'Registration'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AbstractSubmission')}>
        <Button btnText={'Abstract Submission'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    overflow: 'hidden',
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    // flex:1,
    aspectRatio:3,
  },
  btnDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
