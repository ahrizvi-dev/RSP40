/* eslint-disable react/react-in-jsx-scope */
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {Formik} from 'formik';
import DocumentPicker from 'react-native-document-picker';
import {number, object, string} from 'yup';
import RNPickerSelect from 'react-native-picker-select';

interface categoryPricesProps {
  'RSP Life Member': string,
  'Non-member Consultant': string,
  'Resident': string,
  'Technologist': string,
  'Foreign Delegate': string,
}

// Category price mapping
const categoryPrices: categoryPricesProps = {
  'RSP Life Member': '8000',
  'Non-member Consultant': '12000',
  'Resident': '5000',
  'Technologist': '2000',
  'Foreign Delegate': 'USD 100',
};



const selectDocument = async () => {
  try {
    const doc = await DocumentPicker.pick({
      type: DocumentPicker.types.pdf,
    });
    console.log(doc);
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};

const formSchema = object({
  Category: string().required('Category is required'),
  FirstName: string().required('Please enter FirstName'),
  LastName: string().required('Please enter LastName'),
  RegdNo: number().required('Please enter REGNO'),
  InstituteHospital: string().required('Please enter Institude/Hospital'),
  Email: string()
    .email('please enter a valid email')
    .required('Please enter Email'),
  ContactNo: number().required('Please enter ContacNo'),
  Address: string().required('Please enter Address'),
});



const RegistrationForm = () => {
  return (
    <Formik
      validationSchema={formSchema}
      initialValues={{
        Category: '',
        FirstName: '',
        LastName: '',
        RegdNo: '',
        InstituteHospital: '',
        Email: '',
        ContactNo: '',
        Address: '',
      }}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors,touched,setFieldValue}) => (
        <View style={styles.inputContainer}>
          <Text>Category</Text>

          <RNPickerSelect
            onValueChange={value => setFieldValue('Category', value)}
            items={[
              {label: 'RSP Life Member', value: 'RSP Life Member'},
              {label: 'Non-member Consultant', value: 'Non-member Consultant'},
              {label: 'Resident', value: 'Resident'},
              {label: 'Technologist', value: 'Technologist'},
              {label: 'Foreign Delegate', value: 'Foreign Delegate'},
            ]}
            style={pickerSelectStyles}
            value={values.Category}
          />

          {touched.Category && errors.Category && (
            <Text style={styles.errorText}>{errors.Category}</Text>
          )}
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('FirstName')}
            onBlur={handleBlur('FirstName')}
            value={values.FirstName}
          />
          {touched.FirstName && errors.FirstName && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.FirstName}
            </Text>
          )}
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('LastName')}
            onBlur={handleBlur('LastName')}
            value={values.LastName}
          />
          {touched.LastName && errors.LastName && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.LastName}
            </Text>
          )}

          <Text>PMDC Regd No:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('RegdNo')}
            onBlur={handleBlur('RegdNo')}
            value={values.RegdNo}
          />
          {touched.RegdNo && errors.RegdNo && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{color: 'red', alignSelf: 'center'}}>
              {errors.RegdNo}
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

          <Text>
          Total Amount: {values.Category ? `${categoryPrices[values.Category]}` : 'Please choose the desired category above'}
          </Text>
          <Text>Upload File:</Text>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '100%',
              height: 40,
              borderRadius: 10,
              borderWidth: 0.5,
              borderStyle: 'solid',
              borderColor: '#acacac',
              overflow: 'hidden',
            }}>
            <Button
              onPress={selectDocument}
              title="Select File"
              color={'#000'}
            />
          </View>
          <Button
            onPress={(e: GestureResponderEvent) => handleSubmit()}
            title="Submit"
          />
        </View>
      )}
    </Formik>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10,
    marginVertical: 20,
    paddingLeft: 20,
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
