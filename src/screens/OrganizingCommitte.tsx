/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import styles from '../styles/OrganizingCommitte.style';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
// import {organizingCommitteData} from '../../staticData';
import axios from 'axios';

interface Organizing      {
  id: number,
  name: string,
  designation: string,
  image: string,
}

type ececutiveCouncilScreenProps = NativeStackScreenProps<RootStackParamList>;
const OrganizingCommitte: React.FC<ececutiveCouncilScreenProps> = ({
  navigation,
}) => {
  const [organizing, setOrganizing] = useState<Organizing[]>([]);

  useEffect(() => {
    const fetchOrganizingCommitte = async () => {
      try {
        const response = await axios.get(
          'https://rsp40.com/api/organizing-members/list',
        );
        setOrganizing(response.data.organizing_members);
      } catch (error) {}
    };
    fetchOrganizingCommitte();
  }, []);

  return (
    <View style={styles.container}>
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
            uri: 'https://rsp40.com/upload/1724926488.png',
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          numColumns={2}
          data={organizing}
          columnWrapperStyle={styles.columWrapperStyle}
          keyExtractor={item => item.id.toString()}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListHeaderComponent={() => (
            <View
              style={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                Organizing Committee RSP40
              </Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={{borderRadius: 10, marginBottom: 20}}>
              <Image
                style={{aspectRatio: 0.8, borderRadius: 10, height: 200}}
                source={{uri: `https://rsp40.com/${item.image}`}}
              />
              <View
                style={{
                  flex:1,
                  flexWrap:'wrap',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 5,
                    textAlign:'center',
                    flexWrap: 'wrap',
                  }}>
                  {item.name}
                </Text>
                <Text>{item.designation}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default OrganizingCommitte;
