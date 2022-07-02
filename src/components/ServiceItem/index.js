import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ServiceItem = ({listitem}) => {
  const parseDate = date => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftPart}>
          <View style={styles.image} />

          <View style={styles.infoContainer}>
            <Text style={styles.text}>{listitem.title}</Text>
            <Text style={styles.text}>{listitem.type}</Text>
            <Text style={styles.text}>
              {parseDate(listitem.earliestTimeAvailable)}
            </Text>
          </View>
        </View>

        <View style={styles.rightPart}>
          <Text>{listitem.rating}</Text>
          <Text>{listitem.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;
