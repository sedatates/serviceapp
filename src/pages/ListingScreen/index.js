import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const ListingScreen = ({navigation}) => {
  const {state} = useSelector(reducer => ({
    state: reducer.service,
  }));
  console.log(state);
  return (
    <SafeAreaView>
      <Text style={styles.container}>sedat</Text>
      <Button title="sedat" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default ListingScreen;
