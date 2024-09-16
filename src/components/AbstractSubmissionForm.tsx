import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import DocumentPicker from 'react-native-document-picker';
import {number, object, string} from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import {TextInput} from 'react-native';

const formSchema = object({
  Presenter: string().required('Presenter is required'),
  Designation: string().required('Designation is required'),
  Title: string().required('Title is required'),
  OralPresentation: string().required('OralPresentation is required'),
  PMDCRegdNo: number().required('PMDCRegdNo is required'),
  InstituteHospital: string().required('Institute/Hospital is required'),
  Email: string().email().required('Email is required'),
  ContactNo: number().required('ContactNo is required'),
  City: string().required('City is required'),
  Address: string().required('Address is required'),
});

const AbstractSubmissionForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const selectDocument = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: DocumentPicker.types.pdf, // You can customize the file types if needed
      });
      console.log(doc);
      setSelectedFile(doc[0]); // Set the selected file
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Document picker was cancelled');
      } else {
        console.log('Error picking document: ', error);
      }
    }
  };
  return (
    <Formik
      validationSchema={formSchema}
      initialValues={{
        Presenter: '',
        Designation: '',
        Title: '',
        OralPresentation: '',
        PMDCRegdNo: '',
        InstituteHospital: '',
        Email: '',
        ContactNo: '',
        City: '',
        Address: '',
        FileUpload: '',
      }}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={styles.inputContainer}>
          <Text>Presenter:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('Presenter')}
            onBlur={handleBlur('Presenter')}
            value={values.Presenter}
          />
          {touched.Presenter && errors.Presenter && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.Presenter}
            </Text>
          )}
          <Text>Designation:</Text>

          <RNPickerSelect
            onValueChange={value => setFieldValue('Designation', value)}
            items={[
              {label: 'RSP Life Member', value: 'RSP Life Member'},
              {label: 'Non-member Consultant', value: 'Non-member Consultant'},
              {label: 'Resident', value: 'Resident'},
              {label: 'Technologist', value: 'Technologist'},
            ]}
            style={pickerSelectStyles}
            value={values.Designation}
          />

          {touched.Designation && errors.Designation && (
            <Text style={styles.errorText}>{errors.Designation}</Text>
          )}
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('Title')}
            onBlur={handleBlur('Title')}
            value={values.Title}
          />
          {touched.Title && errors.Title && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.Title}
            </Text>
          )}

          <Text>Oral Presentation:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('OralPresentation')}
            onBlur={handleBlur('OralPresentation')}
            value={values.OralPresentation}
          />
          {touched.OralPresentation && errors.OralPresentation && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.OralPresentation}
            </Text>
          )}
          <Text>PMDC Regd No:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('PMDCRegdNo')}
            onBlur={handleBlur('PMDCRegdNo')}
            value={values.PMDCRegdNo}
          />
          {touched.PMDCRegdNo && errors.PMDCRegdNo && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.PMDCRegdNo}
            </Text>
          )}

          <Text>Institute / Hospital:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('InstituteHospital')}
            onBlur={handleBlur('InstituteHospital')}
            value={values.InstituteHospital}
          />
          {touched.InstituteHospital && errors.InstituteHospital && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.InstituteHospital}
            </Text>
          )}

          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('Email')}
            onBlur={handleBlur('Email')}
            value={values.Email}
          />
          {errors.Email && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {touched.Email && errors.Email}
            </Text>
          )}

          <Text>Contact No:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('ContactNo')}
            onBlur={handleBlur('ContactNo')}
            value={values.ContactNo}
          />
          {touched.ContactNo && errors.ContactNo && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.ContactNo}
            </Text>
          )}
          <Text>City:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('City')}
            onBlur={handleBlur('City')}
            value={values.City}
          />
          {touched.City && errors.City && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.City}
            </Text>
          )}

          <Text>Address:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('Address')}
            onBlur={handleBlur('Address')}
            value={values.Address}
          />
          {touched.Address && errors.Address && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.Address}
            </Text>
          )}
          <Text>Upload File:</Text>
          <View>
            <TextInput
              style={[styles.input, {textAlign: 'center'}]}
              onChangeText={handleChange('FileUpload')}
              onBlur={handleBlur('FileUpload')}
              value={values.FileUpload}
              onPress={selectDocument}
              placeholder="UPLOED YOUR FILE"
            />
            <Text>
              Uploaded File:
              {selectedFile ? selectedFile.name : '  No file uploaded'}
            </Text>
          </View>
          {touched.FileUpload && errors.FileUpload && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.FileUpload}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default AbstractSubmissionForm;

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#acacac',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

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
