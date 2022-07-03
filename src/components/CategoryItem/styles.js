import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#F6F6F6',
  },
  selectedItem: {
    margin: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#0064E5',
    borderColor: '#0064E5',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: 'black',
  },
  selectedText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
});

export default styles;
