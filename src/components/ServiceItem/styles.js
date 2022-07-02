import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#DEE3E7',
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    padding: 8,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
  },
  image: {
    backgroundColor: 'gray',
    width: 64,
    height: 64,
  },
  infoContainer: {
    marginLeft: 8,
  },
  rightPart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  leftPart: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
