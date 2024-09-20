/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {RootStackParamList} from '../navigations/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';



type SplashScreenProps = NativeStackScreenProps<RootStackParamList>;
const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {


  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <View style={styles.container}>
     <ImageBackground resizeMode='contain' style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={{uri:'https://rsp40.com/upload/1726769367_66ec68d71b4c3.png'}}/>
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
