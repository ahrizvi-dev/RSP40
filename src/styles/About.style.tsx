import {StyleSheet} from 'react-native';

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
    borderRadius: 25,
  },
  imageContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#E33FA1',
  },
  image: {
    aspectRatio: 1.5,
  },
  AboutRsp: {
    position: 'absolute',
    top: '40%',
    left: '30%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 25,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 14,
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
});

export default styles;
