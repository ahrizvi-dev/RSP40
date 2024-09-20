/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    registrationNotes:any,
}

const RegistrationNotes:React.FC<Props> = ({registrationNotes}) => {
  return (
    <>
      <FlatList
        data={registrationNotes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{paddingHorizontal: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
              }}>
              <Icon name="square" size={10} color={'#fff'} />
              <Text style={{flexShrink: 1}}>{item.notes}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 25,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 10,
            }}>
            Notes
          </Text>
        )}
      />
    </>
  );
};

export default RegistrationNotes;
