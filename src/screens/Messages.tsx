/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {Dimensions, FlatList, ImageBackground, Text, View} from 'react-native';
import styles from '../styles/Message.style';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageData from '../components/MessageData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
// import {messageData} from '../../staticData';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

interface Message {
  id: number;
  name: string;
  designation: string;
  message: string;
  image: string;
}

type messageScreenProps = NativeStackScreenProps<RootStackParamList>;
const Messages: React.FC<messageScreenProps> = ({navigation}) => {
  const [message, setMessage] = useState<Message[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('https://rsp40.com/api/messages/list');
        // console.log(response.data,'hello world');
        setMessage(response.data.messages);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchMessage();
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
            uri: 'https://rsp40.com/upload/1724926455.png',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={message}
          renderItem={({item}) => (
            <MessageData
              message={item.message}
              name={item.name}
              image={item.image = `https://rsp40.com/${item.image}`}
              position={item.designation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Messages;
