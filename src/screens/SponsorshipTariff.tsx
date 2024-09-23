import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import {ImageBackground} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../styles/SponsorshipTariff.style';
import RNFS from 'react-native-fs'; // File System import

type sponsorshipTriffScreenProps = NativeStackScreenProps<RootStackParamList>;
const SponsorshipTriff: React.FC<sponsorshipTriffScreenProps> = ({
  navigation,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // Create a reference to the Pdf component
  const pdfRef = useRef<any>(null);

  const pdfUrl = 'https://rsp40.com/upload/1724312884.pdf';

  const source = {
    uri: pdfUrl,
    cache: true,
  };

  const handleLoadComplete = (numberOfPages: number) => {
    setTotalPages(numberOfPages);
  };

  const handlePageChanged = (page: number) => {
    setPageNumber(page);
  };

  // Function to download the PDF
  const downloadPdf = async () => {
    const fileName = 'Sponsorship_Tariff.pdf';
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    try {
      const result = await RNFS.downloadFile({
        fromUrl: pdfUrl,
        toFile: filePath,
      }).promise;

      if (result.statusCode === 200) {
        Alert.alert('Download Complete', `File saved to: ${filePath}`);
      } else {
        Alert.alert(
          'Download Failed',
          'Failed to download the file. Please try again.',
        );
      }
    } catch (err) {
      Alert.alert('Download Failed', 'Failed to download the file.');
      console.error(err);
    }
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

        {/* Download Button */}
        <TouchableOpacity onPress={downloadPdf} style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pdfContainer}>
        <Pdf
          ref={pdfRef}
          enablePaging={true}
          style={styles.pdf}
          trustAllCerts={false}
          spacing={0}
          source={source}
          onLoadComplete={numberOfPages => handleLoadComplete(numberOfPages)}
          onPageChanged={page => handlePageChanged(page)}
          renderActivityIndicator={() => (
            <ActivityIndicator color={'#fff'} size={'large'} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SponsorshipTriff;
