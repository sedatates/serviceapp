import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ServiceItem, CategoryItem} from '../../components';
import styles from './styles';
import Arrow from '../../assets/Arrow.svg';
import Settings from '../../assets/Settings.svg';

const ListingScreen = ({navigation}) => {
  const {services, categories} = useSelector(reducer => ({
    services: reducer.service.items,
    categories: reducer.category.items,
  }));

  const renderItem = ({item}) => <ServiceItem listItem={item} />;
  const renderFilters = ({item}) => <CategoryItem listItem={item} />;

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate('Home')}>
          <Arrow />
        </TouchableOpacity>
        <Text style={styles.headerText}>Services</Text>
        <Settings />
      </View>
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={categories}
          renderItem={renderFilters}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={{height: '100%'}}>
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default ListingScreen;
