/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import Icon from 'react-native-vector-icons/Ionicons';
import AbstractSubmissionForm from '../components/AbstractSubmissionForm';
import styles from '../styles/AbstractSubmission.style';

type abstractSubmissionScreenProps = NativeStackScreenProps<RootStackParamList>;

const AbstractSubmission: React.FC<abstractSubmissionScreenProps> = ({
  navigation,
}) => {
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
        <AbstractSubmissionForm/>
      </View>
      <View style={{paddingHorizontal:10,marginVertical:20}}>
        <Text style={{fontSize:23,fontWeight:'bold',color:'#fff'}}>Guidelines for Abstract Submission</Text>
        <Text>1. Submission category: Oral presentation or e-Poster.</Text>
        <Text>2. Please do not send abstracts in either hard copy or on email address.</Text>
        <Text>3. Acceptance of out-of-format and hard-copy-only abstracts is regretted.</Text>
        <Text>4. Kindly follow the ethical considerations and plagiarism to avoid later retraction.</Text>
        <Text>5. Conflict of interest, Funding source, authorship contribution and justification in case of more than 3 authors, ethical permission and other disclosures should be added. Those with disputed authorship will not be entertained. The content will be checked for plagiarism.</Text>
        <Text>6. The accuracy of the submitted abstract is the responsibility of the authors. Authors should prepare and proofread their abstracts carefully prior to submission. The Abstract Review Committee will not proof-read or correct spelling, typographical, grammatical, or scientific errors, nor can changes be made once the abstract has been submitted.</Text>
        <Text>7. All PRESENTERS must register to attend the Annual RSP conference.</Text>
        <Text style={{fontSize:23,fontWeight:'bold',color:'#fff'}}>Guidelines for Oral Presentation</Text>
        <Text>1. All presentations will be performed offline.</Text>
        <Text>2. Oral Presentation talks will be allotted 7 minutes each.</Text>
        <Text>3. Prepare your slide presentation in Microsoft PowerPoint.</Text>
        <Text style={{fontSize:23,fontWeight:'bold',color:'#fff'}}>Guidelines for E-Poster Presentation</Text>
        <Text>1. Please submit your E-Poster as a JPG file in orientation</Text>
        <Text>2. File Format: JPG file – 1 page is recommended. Portrait Orientation size 32x52inches.</Text>
        <Text>3. Font types: Times New Roman, Font size:  11. Hyperlinks, animated images, animations and embedded videos are not permitted</Text>
        <Text>4. Images and tables: 3-4 in total, at least 150-300 dpi to ensure that your poster is clear and professional when displayed on screen. Good picture quality is essential. When inserting images, photos, tables, etc., use copy-paste. Do not use embedded documents</Text>
        <Text>5. File size: Less than 5 MB</Text>
      </View>
    </ScrollView>
  );
};

export default AbstractSubmission;
