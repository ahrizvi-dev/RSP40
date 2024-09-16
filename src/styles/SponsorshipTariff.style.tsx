import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
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
  pdfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 600,

    backgroundColor: '#000',
  },
  downloadButton: {
    margin: 20,
  },
  pageCounter: {
    alignItems: 'center',
    marginTop: 10,
  },
  pageCounterText: {
    fontSize: 16,
    color: '#fff',
  },
});
export default styles;
