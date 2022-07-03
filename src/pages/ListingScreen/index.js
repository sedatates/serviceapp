import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ServiceItem, CategoryItem} from '../../components';
import styles from './styles';
import Arrow from '../../assets/Arrow.svg';
import Settings from '../../assets/Settings.svg';

const ListingScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const {services, categoriesState} = useSelector(reducer => ({
    services: reducer.service.items,
    categoriesState: reducer.category.items,
  }));

  const setCategoriesfunc = () => {
    setCategories([{key: 'all', name: 'All'}, ...categoriesState]);
  };
  useEffect(() => {
    filterServices();
    setCategoriesfunc();
  }, [selectedCategory]);

  const filterServices = () => {
    if (selectedCategory === 'all') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(
        service => service.category === selectedCategory,
      );
      setFilteredServices(filtered);
    }
  };

  const renderServiceItem = ({item}) => <ServiceItem listItem={item} />;
  const renderCategory = ({item}) => (
    <CategoryItem
      listItem={item}
      selected={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );

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
      <View style={styles.filterContainer}>
        <FlatList
          style={styles.filterList}
          horizontal
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={{height: '85%'}}>
        <FlatList
          data={filteredServices}
          renderItem={renderServiceItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default ListingScreen;
