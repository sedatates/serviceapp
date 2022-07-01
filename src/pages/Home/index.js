import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {getServices} from '../../redux/features/serviceSlice';
import {getCategory} from '../../redux/features/categorySlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    dispatch(getCategory());
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Service')}
      />
    </View>
  );
};

export default Home;
