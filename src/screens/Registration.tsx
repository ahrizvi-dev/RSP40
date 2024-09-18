/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import styles from '../styles/Registration.style';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import Icon2 from 'react-native-vector-icons/Octicons';
import TableForRegistration from '../components/TableForRegistration';
import RegistrationForm from '../components/RegistrationForm';
import {tableData} from '../../staticData';
import HeaderAllPages from '../components/HeaderAllPages';
import RegistrationStaticData from '../components/RegistrationStaticData';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

interface Fees {
  id: number,
  name: string,
  price: number,
  lateprice: number,
  currency: string,
}

type registerScreenProps = NativeStackScreenProps<RootStackParamList>;
const Registration: React.FC<registerScreenProps> = () => {
  // USESATE START
  const [fees, setFees] = useState<Fees[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  // USESATE END

  // APIS START
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://rsp40.com/api/all-registration-category',
        );
        console.log(response.data, 'hello world');
        setFees(response.data.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // APIS END


  if (loading) {
    return <View style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width, backgroundColor:'#000',flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#fff" /></View>;
  }

  if (error) {
    return (
      <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,backgroundColor:'#000',flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER START  */}
      <HeaderAllPages imageUri={'https://rsp40.com/upload/1724926569.png'} />
      {/* HEADER END  */}
      {/* REGISTRATION STATIC DATA START  */}
      <RegistrationStaticData />
      {/* REGISTRATION STATIC DATA END  */}
      <View style={styles.tableContainer}>
        <FlatList
          horizontal
          data={fees}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
            <Text
            style={{
              textAlign:'center',
              borderColor: '#fff',
              borderWidth: 1,
              borderStyle: 'solid',
              paddingVertical: 5,
              paddingHorizontal:10,
              fontWeight: 'bold',
              color: '#fff',
            }}>
             {item.name}
          </Text>
           <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.price}</Text>
         </>
          )}
        />
      </View>
      <View style={{marginVertical: 20, paddingHorizontal: 10}}>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Note :
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 5,
          }}>
          <Icon2 name="dot" size={20} color={'#fff'} />
          <Text>
            Duly filled registration form is mandatory for registration.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 5,
          }}>
          <Icon2 name="dot" size={20} color={'#fff'} />
          <Text>
            Conference fees include admission to sessions along with lunch and
            tea on all days of the Conference.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 5,
          }}>
          <Icon2 name="dot" size={20} color={'#fff'} />
          <Text>
            It is mandatory to present the original receipt or confirmation
            message at the registration desk upon arrival at conference venue.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 5,
          }}>
          <Icon2 name="dot" size={20} color={'#fff'} />
          <Text>
            Conference bag and conference material is not guaranteed for
            late/on-site registration.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          – Workshops details will display coming soon –
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
          Register Here !
        </Text>
        <RegistrationForm />
      </View>
    </ScrollView>
  );
};

export default Registration;
