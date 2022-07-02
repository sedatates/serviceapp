import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ServiceItem from '../../components';
import styles from './styles';

const ListingScreen = ({navigation}) => {
  const {services, categories} = useSelector(reducer => ({
    services: reducer.service.items,
    categories: reducer.category.items,
  }));

  const renderItem = ({item}) => <ServiceItem listitem={item} />;
  const renderFilters = ({item}) => <Text>{item.name}</Text>;

  return (
    <View style={styles.background}>
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={categories}
        renderItem={renderFilters}
        keyExtractor={(item, index) => index}
      />
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListingScreen;
