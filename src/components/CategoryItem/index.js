import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const CategoryItem = ({listItem, selected, setSelectedCategory}) => {
  const isSelected = () => {
    return listItem.key === selected;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setSelectedCategory(listItem.key)}>
      <View style={isSelected() ? styles.selectedItem : styles.card}>
        <Text style={isSelected() ? styles.selectedText : styles.text}>
          {listItem.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
