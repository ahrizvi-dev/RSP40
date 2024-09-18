/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import styles from '../styles/ExecutiveCouncil.style';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
// import {executiveCouncilData} from '../../staticData';
import axios from 'axios';

// Define the structure of each executive member
interface Member {
  id: number;
  name: string;
  designation: string;
  image: string;
}

type ececutiveCouncilScreenProps = NativeStackScreenProps<RootStackParamList>;
const ExecutiveCouncil: React.FC<ececutiveCouncilScreenProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState<Member[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          'https://rsp40.com/api/executive-members/list',
        );
        // console.log(response.data, 'hello world');
        setMembers(response.data.executive_members);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (loading) {
    return <View style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width, backgroundColor:'#000',flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#fff" /></View>;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
        // console.log(members, 'hello world');

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
            uri: 'https://rsp40.com/upload/1724926474.png',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={2}
          data={members}
          columnWrapperStyle={styles.columWrapperStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{borderRadius: 10, marginBottom: 20}}>
              <Image
                style={{aspectRatio: 0.8, borderRadius: 10, height: 200}}
                source={{uri: `https://rsp40.com/${item.image}`}}
              />
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 5,
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

export default ExecutiveCouncil;
