import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  flex: {
    height: height,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
});
export default styles;
