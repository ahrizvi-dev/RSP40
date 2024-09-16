import React, {useState} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import {ImageBackground} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../styles/SponsorshipTariff.style';

type sponsorshipTriffScreenProps = NativeStackScreenProps<RootStackParamList>;

const SponsorshipTriff: React.FC<sponsorshipTriffScreenProps> = ({
  navigation,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const source = {
    uri: 'https://rsp40.com/upload/1724312884.pdf',
    cache: true,
  };

  const handleLoadComplete = (numberOfPages: number) => {
    setTotalPages(numberOfPages);
  };

  const handlePageChanged = (page: number, numberOfPages: number) => {
    setPageNumber(page);
  };

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
            uri: 'https://rsp40.com/upload/1724926551.png',
          }}
        />
      </View>
      <View style={styles.pageCounter}>
        <Text style={styles.pageCounterText}>
          Page {pageNumber} of {totalPages}
        </Text>
      </View>
      <View style={styles.pdfContainer}>
        <Pdf
          enablePaging={true}
          style={styles.pdf}
          trustAllCerts={false}
          source={source}
          onLoadComplete={numberOfPages => handleLoadComplete(numberOfPages)}
          onPageChanged={(page, numberOfPages) =>
            handlePageChanged(page, numberOfPages)
          }
          renderActivityIndicator={() => (
            <ActivityIndicator color={'#fff'} size={'large'} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SponsorshipTriff;
