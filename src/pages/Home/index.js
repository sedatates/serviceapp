import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {getServices} from '../../redux/features/serviceSlice';
import {getCategory} from '../../redux/features/categorySlice';
import Boatmate from '../../assets/logo.svg';
import styles from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    dispatch(getCategory());
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <Boatmate />
      </View>
      <TouchableOpacity
        style={styles.servicesButton}
        onPress={() => navigation.navigate('Service')}>
        <Text style={styles.serviceButtonText}>Servislere Git</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
