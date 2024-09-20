/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, Text, View} from 'react-native';
import styles from '../styles/Registration.style';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import HeaderAllPages from '../components/HeaderAllPages';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import RegistrationHeading from '../components/RegistrationHeading';
import RegistrationTable from '../components/RegistrationTable';
import RegistrationNotes from '../components/RegistrationNotes';
interface RegistrationHeading {
  id: number;
  first_heading: string;
  second_heading: string;
  date: string;
  venue: string;
  message: string;
  bank_name: string;
  branch_code: string;
  account_title: string;
  bank_account: string;
  last_line: string;
}
interface Fees {
  id: number;
  name: string;
  price: number;
  lateprice: number;
  currency: string;
}
interface Notes {
  id: number;
  notes: string;
}

type registerScreenProps = NativeStackScreenProps<RootStackParamList>;
const Registration: React.FC<registerScreenProps> = () => {
  // USESATE START
  const [registrationHeading, setRegistrationHeading] =
    useState<RegistrationHeading | null>(null);
  const [registrationTable, setRegistrationTable] = useState<Fees[]>([]);
  const [registrationNotes, setRegistrationNotes] = useState<Notes[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  // USESATE END

  // APIS START
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://rsp40.com/api/registration-content',
        );
        const topContent = response.data['Registration Form Top Content'];
        // console.log(topContent, 'hello world');
        setRegistrationHeading(topContent);
        setRegistrationTable(response.data.Categories);
        setRegistrationNotes(response.data.notes);
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
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: '#000',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: '#000',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER START  */}
      <HeaderAllPages imageUri={'https://rsp40.com/upload/1724926569.png'} />
      {/* HEADER END  */}
      {/* REGISTRATION HEADING START */}
      <RegistrationHeading registrationHeading={registrationHeading} />
      {/* REGISTRATION HEADING END */}
      {/* REGISTRATION TABLE START  */}
      <RegistrationTable registrationTable={registrationTable} />
      {/* REGISTRATION TABLE END  */}
      {/* REGISTRATION NOTES START  */}
      <RegistrationNotes registrationNotes={registrationNotes} />
      {/* REGISTRATION NOTES END  */}
      {/* REGISTRATION FORM START  */}
      {/* REGISTRATION FORM END  */}
    </ScrollView>
  );
};

export default Registration;
