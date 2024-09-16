import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  line: {
    width: '100%',
    height: 10,
    backgroundColor: '#E33FA1',
    marginBottom: 10,
  },
  pagesDiv: {
    borderRadius: 20,
    height: 150,
    width: 160,
    marginBottom: 20,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  columWrapperStyle: {
    justifyContent: 'center',
    gap: 15,
  },
});
export default styles;
