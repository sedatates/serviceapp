import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  filterContainer: {
    overflow: 'hidden',
    elevation: 20,
  },
  filterList: {
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  header: {
    width: 345,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: '#363A3D',
    fontFamily: 'Splash-Regular',
  },
  goBackButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
