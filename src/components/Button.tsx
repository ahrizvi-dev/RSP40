import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface btnTypeProps {
  btnText: string;
}

const Button: React.FC<btnTypeProps> = ({btnText}) => {
  return (
    <LinearGradient
      colors={['#059DFF', '#E33FA1']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <View>
        <Text style={styles.text}>{btnText}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Button;
