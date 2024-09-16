import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

interface propsItem {
  image: string;
  name: string;
  position: string;
  message: string;
}

const MessageData: React.FC<propsItem> = ({image, name, position, message}) => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <View>
          <Text style={styles.messageText}>Message</Text>
          <Text style={{fontSize:15,fontWeight:'bold',marginVertical:5,}}>{name}</Text>
          <Text>{position}</Text>
        </View>
      </View>
      <Text style={{marginTop:10,}}>{message}</Text>
      <View style={styles.divider}></View>
    </View>
  );
};

export default MessageData;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    flexWrap:'wrap',
    marginTop:30,
  },
  divider:{
    width:'100%',
    height:1,
    marginTop:10,
    backgroundColor:'#E33FA1',
  },
  messageText:{
    color:'#E33FA1',
    fontSize:20,
  },
});
