/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View} from 'react-native';
import React from 'react';

interface Props {
    registrationHeading:any,
}

const RegistrationHeading:React.FC<Props> = ({registrationHeading}) => {
  return (
    <>
      {registrationHeading && (
        <FlatList
        nestedScrollEnabled
          data={[registrationHeading]} // Wrap it in an array since it's an object
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 10, marginVertical: 20}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.first_heading}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.second_heading}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Date: {item.date}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Venue: {item.venue}
              </Text>
              <Text style={{color: '#fff', marginTop: 5}}>{item.message}</Text>
              <Text style={{color: '#fff', marginTop: 5}}>
                Bank: {item.bank_name}
              </Text>
              <Text style={{color: '#fff', marginTop: 5}}>
                Branch Code: {item.branch_code}
              </Text>
              <Text style={{color: '#fff', marginTop: 5}}>
                Account Title: {item.account_title}
              </Text>
              <Text style={{color: '#fff', marginTop: 5}}>
                Account No: {item.bank_account}
              </Text>
              <Text style={{color: '#fff', marginTop: 5}}>
                {item.last_line}
              </Text>
            </View>
          )}
        />
      )}
    </>
  );
};

export default RegistrationHeading;

