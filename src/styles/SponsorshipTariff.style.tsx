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
    height: 640,

    backgroundColor: '#000',
  },
  downloadButton: {
    backgroundColor:'#E33FA1',
    paddingHorizontal:20,
    paddingVertical:2,
    borderRadius:20,
  },
  pageCounter: {
    alignItems: 'center',
    marginTop: 0,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'#F58820',
    paddingHorizontal:40,
    paddingVertical:5,
  },
  pageCounterText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationContainer:{
    position:'absolute',
    bottom:10,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:30,
  },
  navButton:{
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:8,
  },
});
export default styles;
