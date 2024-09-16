/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';


const TableForRegistration = ({item}) => {
  return (
    <View style={{}}>
         <Text
           style={{
             textAlign:'center',
             borderColor: '#fff',
             borderWidth: 1,
             borderStyle: 'solid',
             paddingVertical: 5,
             paddingHorizontal:10,
             fontWeight: 'bold',
             color: '#fff',
           }}>
            {item.title}
         </Text>
         <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.item1}</Text>
         <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.item2}</Text>
         <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.item3}</Text>
         <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.item4}</Text>
         <Text style={{
            textAlign:'center',
            borderColor: '#fff',
            borderWidth: 0.2,
            borderStyle: 'solid',
            paddingVertical: 5,
            color: '#fff',
         }}>{item.item5}</Text>
       </View>
  );
};

export default TableForRegistration;

