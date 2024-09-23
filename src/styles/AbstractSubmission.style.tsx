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
  inputContainer: {
    gap: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#acacac',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
export default styles;
