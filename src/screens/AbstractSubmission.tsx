/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import Icon from 'react-native-vector-icons/Ionicons';
// import AbstractSubmissionForm from '../components/AbstractSubmissionForm';
import styles from '../styles/AbstractSubmission.style';
import axios, {AxiosError} from 'axios';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Formik} from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import * as Yup from 'yup';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import convertToFormData from '../helper/convertToFormData';

const formSchema = Yup.object({
  presenter: Yup.string().required('Presenter is required'),
  designation: Yup.string().required('Designation is required'),
  title: Yup.string().required('Title is required'),
  oral_presentation: Yup.string().required('OralPresentation is required'),
  pmdc_reg_no: Yup.number().required('PMDCRegdNo is required'),
  institute: Yup.string().required('Institute/Hospital is required'),
  email: Yup.string().email().required('Email is required'),
  contact_no: Yup.number().required('ContactNo is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  file: Yup.mixed().required('File upload is required'),
});

interface Headings {
  id: number;
  guideline: string;
}

type abstractSubmissionScreenProps = NativeStackScreenProps<RootStackParamList>;
const AbstractSubmission: React.FC<abstractSubmissionScreenProps> = ({
  navigation,
}) => {
  const [heading1, setHeading1] = useState<Headings[]>([]);
  const [heading2, setHeading2] = useState<Headings[]>([]);
  const [heading3, setHeading3] = useState<Headings[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [fileUri, setFileUri] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://rsp40.com/api/abstraction-content',
        );
        setHeading1(response.data['Guidelines for Abstract Submission']);
        setHeading2(response.data['Guidelines for Oral Presentation']);
        setHeading3(response.data['Guidelines for E-Poster Presentation']);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFileUpload = async (setFieldValue: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
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
            uri: 'https://rsp40.com/upload/1724926588.png',
          }}
        />
      </View>
      {/* FORM  */}
      <View>
        <Formik
          initialValues={{
            presenter: '',
            designation: '',
            title: '',
            oral_presentation: '',
            pmdc_reg_no: '',
            institute: '',
            email: '',
            contact_no: '',
            city: '',
            address: '',
            file: null,
          }}
          validationSchema={formSchema}
          onSubmit={async (values, {resetForm, setFieldValue}) => {
            const data = convertToFormData(values);
            try {
              await axios.post('https://rsp40.com/api/post-abstraction', data, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              setSuccessMessage('Form submitted successfully!');
              resetForm();
              setFieldValue('file', null);
              setFileUri(null); // Reset the fileUri state to clear the file display
            } catch (error) {
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
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => {
            return (
              <View style={styles.inputContainer}>
                <Text>Presenter:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('presenter')}
                  onBlur={handleBlur('presenter')}
                  value={values.presenter}
                />
                {touched.presenter && errors.presenter && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.presenter}
                  </Text>
                )}
                <Text>Designation:</Text>

                <RNPickerSelect
                  onValueChange={value => setFieldValue('designation', value)}
                  items={[
                    {label: 'RSP Life Member', value: 'RSP Life Member'},
                    {
                      label: 'Non-member Consultant',
                      value: 'Non-member Consultant',
                    },
                    {label: 'Resident', value: 'Resident'},
                    {label: 'Technologist', value: 'Technologist'},
                  ]}
                  style={pickerSelectStyles}
                  value={values.designation}
                />

                {touched.designation && errors.designation && (
                  <Text style={styles.errorText}>{errors.designation}</Text>
                )}
                <Text>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                {touched.title && errors.title && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.title}
                  </Text>
                )}

                <Text>Oral Presentation:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('oral_presentation')}
                  onBlur={handleBlur('oral_presentation')}
                  value={values.oral_presentation}
                />
                {touched.oral_presentation && errors.oral_presentation && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.oral_presentation}
                  </Text>
                )}
                <Text>PMDC Regd No:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('pmdc_reg_no')}
                  onBlur={handleBlur('pmdc_reg_no')}
                  value={values.pmdc_reg_no}
                />
                {touched.pmdc_reg_no && errors.pmdc_reg_no && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.pmdc_reg_no}
                  </Text>
                )}

                <Text>Institute / Hospital:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('institute')}
                  onBlur={handleBlur('institute')}
                  value={values.institute}
                />
                {touched.institute && errors.institute && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.institute}
                  </Text>
                )}

                <Text>Email:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {touched.email && errors.email}
                  </Text>
                )}

                <Text>Contact No:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('contact_no')}
                  onBlur={handleBlur('contact_no')}
                  value={values.contact_no}
                />
                {touched.contact_no && errors.contact_no && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.contact_no}
                  </Text>
                )}
                <Text>City:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                />
                {touched.city && errors.city && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.city}
                  </Text>
                )}

                <Text>Address:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
                {touched.address && errors.address && (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.address}
                  </Text>
                )}
                <Text>Upload File:</Text>
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
                  <Text style={{color: 'green', marginBottom: 0}}>
                    File selected: {fileUri}
                  </Text>
                )}
                {touched.file && errors.file && (
                  <Text style={{color: 'red'}}>{errors.file}</Text>
                )}
                <Text style={{opacity: 0.5}}>
                  Only Word & pdf file can be Uploaded
                </Text>

                <Button title="Submit" onPress={handleSubmit} />
                {/* Success Message */}
                {successMessage ? (
                  <Text style={{color: 'green', marginBottom: 10}}>
                    {successMessage}
                  </Text>
                ) : null}
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={{paddingHorizontal: 10, marginVertical: 20}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>
          Guidelines for Abstract Submission
        </Text>
        {heading1.map((item, index) => (
          <View
            style={{flexDirection: 'row', alignItems: 'flex-start', gap: 5}}
            key={item.id}>
            <Text style={{color: '#fff'}}>{index + 1}</Text>
            <Text>{item.guideline}</Text>
          </View>
        ))}
        <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>
          Guidelines for Oral Presentation
        </Text>
        {heading2.map((item, index) => (
          <View
            style={{flexDirection: 'row', alignItems: 'flex-start', gap: 5}}
            key={item.id}>
            <Text style={{color: '#fff'}}>{index + 1}</Text>
            <Text>{item.guideline}</Text>
          </View>
        ))}
        <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>
          Guidelines for E-Poster Presentation
        </Text>
        {heading3.map((item, index) => (
          <View
            style={{flexDirection: 'row', alignItems: 'flex-start', gap: 5}}
            key={item.id}>
            <Text style={{color: '#fff'}}>{index + 1}</Text>
            <Text>{item.guideline}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AbstractSubmission;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    color: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
});
