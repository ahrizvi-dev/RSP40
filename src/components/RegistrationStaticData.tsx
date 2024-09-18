/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RegistrationStaticData = () => {
  return (
    <View style={styles.contentContainer}>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        40th Annual Conference of Radiological Society of Pakistan
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        Connecting across borders
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        Date: November 8-10, 2024
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        Venue: Pearl Contiential Hotel Rawalpindi
      </Text>
      <Text style={{marginBottom: 5}}>Dear Participants,</Text>
      <Text style={{marginBottom: 5}}>
        To initiate the registration process, please submit the registration fee
        in advance and include a screenshot of the payment in the registration
        form provided below. You can conveniently make the payment by directly
        transferring the registration fees to the official bank account of
        Radiological Society of Pakistan Bank Name: National Bank of Pakistan
      </Text>
      <Text style={{marginBottom: 3}}>Branch Code: 0303</Text>
      <Text style={{marginBottom: 3}}>
        Account Title: Radiological Society of Pakistan
      </Text>
      <Text style={{marginBottom: 3}}>
        Bank Account: Pk21NBPA0303003003226572
      </Text>
      <Text style={{marginBottom: 3}}>
        Below, you will find the registration fee breakdown for different
        participants:
      </Text>
    </View>
  );
};

export default RegistrationStaticData;

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
