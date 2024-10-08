import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    // maxHeight:Dimensions.get('window').height,
  },
  backBtnContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99999,
  },
  backIcon: {
    margin: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    backgroundColor: '#E33FA1',
  },
  backImage: {
    aspectRatio: 3,
  },

  tableContainer: {
    paddingHorizontal: 10,
  },
  formContainer: {
    paddingHorizontal: 10,
  },
});
export default styles;
