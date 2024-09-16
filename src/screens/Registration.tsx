/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/Registration.style';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';
import TableForRegistration from '../components/TableForRegistration';
import RegistrationForm from '../components/RegistrationForm';
import { tableData } from '../../staticData';

type registerScreenProps = NativeStackScreenProps<RootStackParamList>;


const Registration: React.FC<registerScreenProps> = ({navigation}) => {
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
            uri: 'https://rsp40.com/upload/1724926569.png',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
          40th Annual Conference of Radiological Society of Pakistan
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
          Connecting across borders
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
          Date: November 8-10, 2024
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
          Venue: Pearl Contiential Hotel Rawalpindi
        </Text>
        <Text style={{marginBottom: 5}}>Dear Participants,</Text>
        <Text style={{marginBottom: 5}}>
          To initiate the registration process, please submit the registration
          fee in advance and include a screenshot of the payment in the
          registration form provided below. You can conveniently make the
          payment by directly transferring the registration fees to the official
          bank account of Radiological Society of Pakistan Bank Name: National
          Bank of Pakistan
        </Text>
        <Text style={{marginBottom: 3}}>Branch Code: 0303</Text>
        <Text style={{marginBottom: 3}}>
          Account Title: Radiological Society of Pakistan
        </Text>
        <Text style={{marginBottom: 3}}>
          Bank Account: Pk21NBPA0303003003226572
        </Text>
        <Text style={{marginBottom: 3}}>
          Below, you will find the registration fee breakdown for different
          participants:
        </Text>
      </View>
      <View style={styles.tableContainer}>
        <FlatList
          horizontal
          data={tableData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TableForRegistration item={item} />}
        />
      </View>
      <View style={{marginVertical: 20, paddingHorizontal: 10}}>
        <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold',marginBottom:10}}>
          Note :
        </Text>
        <View style={{flexDirection:'row',alignItems:'flex-start',gap:10,marginBottom:5}}>
          <Icon2 name="dot" size={20} color={'#fff'}/>
          <Text>
            Duly filled registration form is mandatory for registration.
          </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-start',gap:10,marginBottom:5}}>
          <Icon2 name="dot" size={20} color={'#fff'}/>
          <Text>
          Conference fees include admission to sessions along with lunch and tea on all days of the Conference.
          </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-start',gap:10,marginBottom:5}}>
          <Icon2 name="dot" size={20} color={'#fff'}/>
          <Text>
          It is mandatory to present the original receipt or confirmation message at the registration desk upon arrival at conference venue.
          </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-start',gap:10,marginBottom:5}}>
          <Icon2 name="dot" size={20} color={'#fff'}/>
          <Text>
          Conference bag and conference material is not guaranteed for late/on-site registration.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical:10,
          }}>
          – Workshops details will display coming soon –
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Register Here !</Text>
        <RegistrationForm/>
      </View>
    </ScrollView>
  );
};

export default Registration;
