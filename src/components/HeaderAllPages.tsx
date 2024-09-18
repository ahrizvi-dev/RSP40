import {StyleSheet, View} from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface headerprops {
    imageUri: string
}

const HeaderAllPages:React.FC<headerprops> = ({imageUri}) => {
    const navigation = useNavigation();
  return (
    <>
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
            uri: imageUri,
          }}
        />
      </View>
    </>
  );
};

export default HeaderAllPages;

const styles = StyleSheet.create({
    backBtnContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99999,
      },
      backIcon: {
        margin: 10,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
      },
      imageContainer: {
        width: '100%',
        height: 140,
        backgroundColor: '#E33FA1',
      },
      backImage: {
        aspectRatio: 3,
      },
});
