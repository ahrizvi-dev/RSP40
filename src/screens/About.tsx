import {
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/About.style';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';


type aboutScreenProps = NativeStackScreenProps<RootStackParamList>

const About:React.FC<aboutScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View  style={styles.backBtnContainer}>
        <Icon onPress={() => navigation.goBack()} style={styles.backIcon} name="chevron-back" size={25} color={'#000'} />
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: 'https://rsp40.com/assets/images/banner/aboutbanner.jpg',
          }}
        />
        <Text style={styles.AboutRsp}>About RSP</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>About RSP</Text>
        <Text style={styles.paragraph}>
          The Radiological Society of Pakistan is the professional association
          of radiologists in Pakistan, which looks after the professional,
          ethical and tariff interests of radiologists in public service and
          private practice, the Radiological Society of Pakistan is dedicated to
          improving the quality of patient care through interactive support of
          members, patients and affiliated healthcare provider organizations.
        </Text>
        <Text style={styles.heading}>Mission</Text>
        <Text style={styles.paragraph}>
          1. To provide continuing education and training to physicians and
          scientists with an active interest in radiology or imaging techniques
        </Text>
        <Text style={styles.paragraph}>
          2. To promote the exchange of ideas and information to further define
          the role, direction and goals of radiology as a subspecialty of
          radiology.
        </Text>
        <Text style={styles.heading}>Our Purpose</Text>
        <Text style={styles.paragraph}>
          The purpose of Radiological Society of Pakistan are advancing the
          science of radiology, improving radiological service to patients and
          the medical community, and studying the economics of radiology; the
          encouragement of improved and continuing education for radiologists;
          and the establishment and maintenance of high medical and ethical
          standards in the practice of radiology.
        </Text>
        <Text style={styles.heading}>Objectives</Text>
        <Text style={styles.paragraph}>
          1. Advance the science of radiology.
        </Text>
        <Text style={styles.paragraph}>
          2. Meet regularly to encourage communication of issues vital to
          radiology.
        </Text>
        <Text style={styles.paragraph}>
          3. Support education and research for the benefit of the discipline.
        </Text>
        <Text style={styles.paragraph}>
          4. Coordinate forums for the exchange of ideas concerning the
          direction and role of radiology and radiology as a subspecialty
        </Text>
        <Text style={styles.paragraph}>
          5. Provide representation for the implementation of these goals
        </Text>
        <Text style={styles.paragraph}>
          6. Improve radiological service to patients and the medical community,
          and studying the economics of radiology
        </Text>
        <Text style={styles.paragraph}>
          7. Encourage improved and continuing education for radiologists.
        </Text>
        <Text style={styles.paragraph}>
          8. Establish and maintain high medical and ethical standards in the
          practice of radiology.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;
