/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/Registration.style';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import HeaderAllPages from '../components/HeaderAllPages';
import axios, {AxiosError} from 'axios';
import {ActivityIndicator} from 'react-native';
import RegistrationHeading from '../components/RegistrationHeading';
import RegistrationTable from '../components/RegistrationTable';
import RegistrationNotes from '../components/RegistrationNotes';
import {TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import convertToFormData from '../helper/convertToFormData';

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

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  pmdc_reg_no: Yup.number().required('PMDC Regd No is required'),
  institute: Yup.string().required('Institute/Hospital is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contact_no: Yup.number().required('Contact number is required'),
  address: Yup.string().required('Address is required'),
  file: Yup.mixed().required('File upload is required'),
});

type registerScreenProps = NativeStackScreenProps<RootStackParamList>;
const Registration: React.FC<registerScreenProps> = () => {
  // USESATE START
  const [registrationHeading, setRegistrationHeading] =
    useState<RegistrationHeading | null>(null);
  const [registrationTable, setRegistrationTable] = useState<Fees[]>([]);
  const [registrationNotes, setRegistrationNotes] = useState<Notes[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [fileUri, setFileUri] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  // USESATE END

  const handleFileUpload = async (setFieldValue: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileUri(res[0].uri); // Store the file URI
      setFieldValue('file', res[0]); // Set Formik field value
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled file upload');
      } else {
        console.error('Error uploading file', err);
      }
    }
  };

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
      <Formik
        initialValues={{
          category: '',
          first_name: '',
          last_name: '',
          pmdc_reg_no: '',
          institute: '',
          email: '',
          contact_no: '',
          address: '',
          file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm, setFieldValue}) => {
          const data = convertToFormData(values);
          try {
            await axios.post('https://rsp40.com/api/post-registration', data, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            setSuccessMessage('Form submitted successfully!');
            resetForm();
            setFieldValue('file', null);
            setFileUri(null); // Reset the fileUri state to clear the file display
          } catch (error: unknown) {
            const axiosError = error as AxiosError;
            console.error(
              'Error:',
              axiosError.response
                ? axiosError.response.data
                : axiosError.message,
            );
          }
        }}>
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          return (
            <View style={{padding: 20}}>
              {/* Success Message */}
              {successMessage ? (
                <Text style={{color: 'green', marginBottom: 10}}>
                  {successMessage}
                </Text>
              ) : null}
              {/* Category Dropdown */}
              <Text>Category</Text>
              <Picker
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                selectedValue={values.category}
                
                onValueChange={itemValue =>
                  setFieldValue('category', itemValue )
                }>
                <Picker.Item label="Select Category" value="" />
                <Picker.Item label="RSP Life Member" value="RSP Life Member" />
                <Picker.Item
                  label="Non-member Consultant"
                  value="Non-member Consultant"
                />
                <Picker.Item label="Resident" value="Resident" />
                <Picker.Item label="Technologist" value="Technologist" />
                <Picker.Item
                  label="Foreign Delegate"
                  value="Foreign Delegate"
                />
              </Picker>
              {touched.category && errors.category && (
                <Text style={{color: 'red'}}>{errors.category}</Text>
              )}

              {/* First Name */}
              <Text>First Name</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('first_name')}
                value={values.first_name}
              />
              {touched.first_name && errors.first_name && (
                <Text style={{color: 'red'}}>{errors.first_name}</Text>
              )}

              {/* Last Name */}
              <Text>Last Name</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('last_name')}
                value={values.last_name}
              />
              {touched.last_name && errors.last_name && (
                <Text style={{color: 'red'}}>{errors.last_name}</Text>
              )}

              {/* PMDC Regd No */}
              <Text>PMDC Regd No</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('pmdc_reg_no')}
                value={values.pmdc_reg_no}
                keyboardType="phone-pad"
              />
              {touched.pmdc_reg_no && errors.pmdc_reg_no && (
                <Text style={{color: 'red'}}>{errors.pmdc_reg_no}</Text>
              )}

              {/* Institute / Hospital */}
              <Text>Institute / Hospital</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('institute')}
                value={values.institute}
              />
              {touched.institute && errors.institute && (
                <Text style={{color: 'red'}}>{errors.institute}</Text>
              )}

              {/* Email */}
              <Text>Email</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}

              {/* Contact No */}
              <Text>Contact No</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('contact_no')}
                value={values.contact_no}
                keyboardType="phone-pad"
              />
              {touched.contact_no && errors.contact_no && (
                <Text style={{color: 'red'}}>{errors.contact_no}</Text>
              )}

              {/* Address */}
              <Text>Address</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginBottom: 5,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                onChangeText={handleChange('address')}
                value={values.address}
              />
              {touched.address && errors.address && (
                <Text style={{color: 'red'}}>{errors.address}</Text>
              )}


              {/* File Upload */}
              <TouchableOpacity
                onPress={() => handleFileUpload(setFieldValue)}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginVertical: 10,
                  width: '100%',
                  borderColor: '#fff',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}>
                <Text>Select File</Text>
              </TouchableOpacity>
              {fileUri && (
                <Text style={{color: 'green', marginBottom: 10}}>
                  File selected: {fileUri}
                </Text>
              )}
              {touched.file && errors.file && (
                <Text style={{color: 'red'}}>{errors.file}</Text>
              )}

              {/* Submit Button */}
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          );
        }}
      </Formik>
      {/* REGISTRATION FORM END  */}
    </ScrollView>
  );
};

export default Registration;
