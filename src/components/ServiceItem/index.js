import React from 'react';
import {Text, View} from 'react-native';

const ServiceItem = ({listitem}) => {
  return (
    <View>
      <Text>{listitem.category}</Text>
      <Text>{listitem.title}</Text>
      <Text>{listitem.type}</Text>
      <Text>{listitem.rating}</Text>
      <Text>{listitem.earliestTimeAvailable}</Text>
    </View>
  );
};

export default ServiceItem;
