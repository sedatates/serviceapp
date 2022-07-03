import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 8,
    width: 343,
    padding: 8,
    borderWidth: 1,
    display: 'flex',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: '#DEE3E7',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
  },
  cardTypeText: {
    fontSize: 12,
    color: '#9B9B9B',
    fontFamily: 'Product Sans',
    textTransform: 'capitalize',
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
  },
  clockContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 12,
    color: '#9B9B9B',
    fontFamily: 'Product Sans',
    marginLeft: 4,
  },
  infoContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPart: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    width: 45,
    padding: 2,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 100, 229, 0.05)',
  },
  ratingText: {
    fontSize: 14,
    color: '#0064E3',
    fontWeight: '700',
  },
  leftPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  heartButton: {
    padding: 4,
  },
});

export default styles;
