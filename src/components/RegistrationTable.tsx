/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Text, View} from 'react-native';
import React from 'react';

interface Props {
    registrationTable:any,
}

const RegistrationTable:React.FC<Props> = ({registrationTable}) => {
  return (
    <>
      <FlatList
      nestedScrollEnabled
        keyExtractor={item => item.id.toString()}
        data={registrationTable}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{flex: 1, textAlign: 'center'}}>{item.name}</Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
              }}>{`${item.currency} ${item.price}`}</Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
              }}>{`${item.currency} ${item.lateprice}`}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text
              style={{
                flex: 1,
                borderColor: '#fff',
                borderWidth: 0.5,
                borderStyle: 'solid',
                paddingHorizontal: 1,
                textAlign: 'center',
                color:'#fff',
              }}>
              Conference Registration Fee
            </Text>
            <Text
              style={{
                flex: 1,
                borderColor: '#fff',
                borderWidth: 0.5,
                borderStyle: 'solid',
                paddingHorizontal: 2,
                textAlign: 'center',
                color:'#fff',
              }}>
              Till October 15, 2024
            </Text>
            <Text
              style={{
                flex: 1,
                borderColor: '#fff',
                borderWidth: 0.5,
                borderStyle: 'solid',
                paddingHorizontal: 1,
                textAlign: 'center',
                color:'#fff',
              }}>
              After October 15, 2024
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default RegistrationTable;

