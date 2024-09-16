import {ImageBackground, ScrollView, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import styles from '../styles/ScientificProgramme.style';

type scientificProgrammeScreenProps =
  NativeStackScreenProps<RootStackParamList>;

const ScientificProgramme: React.FC<scientificProgrammeScreenProps> = ({
  navigation,
}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backBtnContainer}>
        <Icon
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="chevron-back"
          size={30}
          color={'#000'}
        />
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.backImage}
          source={{
            uri: 'https://rsp40.com/upload/1724926504.png',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ScientificProgramme;
