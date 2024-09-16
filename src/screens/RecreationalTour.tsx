/* eslint-disable react-native/no-inline-styles */
import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/RecreationalTour.style';

const RecreationalTour = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        <Text
          style={{
            padding: 30,
            backgroundColor: '#E33FA1',
            fontSize: 30,
            fontWeight: 'bold',
            borderRadius: 20,
          }}>
          Coming Soon
        </Text>
      </View>
    </ScrollView>
  );
};

export default RecreationalTour;

