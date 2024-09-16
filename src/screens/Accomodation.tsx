/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/Accomodation.style';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';

type accomodationScreenProps = NativeStackScreenProps<
  RootStackParamList>;

const Accomodation: React.FC<accomodationScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backBtnContainer}>
        <Icon
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="chevron-back"
          size={25}
          color={'#000'}
        />
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.backImage}
          source={{
            uri: 'https://rsp40.com/upload/1724926534.png',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://rsp40.com/assets/images/venu/pearl.png'}}
        />
        <Text style={{fontSize:15, color:'#fff',fontWeight:'bold',marginVertical:10}}>Accommodation & Venue</Text>
        <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:10}}>
          <Icon style={{padding:5,backgroundColor:'#54d2e8',borderRadius:20}} name="location-sharp" size={20} color={'#fff'} />
          <Text>Pearl Continental Hotel, Rawalpindi</Text>
        </View>
        <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:10}}>
          <Icon style={{padding:5,backgroundColor:'#54d2e8',borderRadius:20}} name="location-sharp" size={20} color={'#fff'} />
          <Text>
            32 km 48 min Travelling from Islamabad International Airport
          </Text>
        </View>
        <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:10}}>
          <Icon style={{padding:5,backgroundColor:'#54d2e8',borderRadius:20}} name="location-sharp" size={20} color={'#fff'} />
          <Text>3.2 km 11 min Travelling from Railway Station</Text>
        </View>
        <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
          <Icon style={{padding:5,backgroundColor:'#54d2e8',borderRadius:20}} name="location-sharp" size={20} color={'#fff'} />
          <Text>For More Information & booking: +92 321 4272326</Text>
        </View>
        <View />
      </View>
    </ScrollView>
  );
};

export default Accomodation;
