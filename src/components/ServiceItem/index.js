import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Hearth from '../../assets/Hearth.svg';
import Clock from '../../assets/Clock.svg';
import Bluestar from '../../assets/BlueStar.svg';

const ServiceItem = ({listItem}) => {
  const parseDate = date => {
    const dateObj = new Date(date);
    const hours = dateObj.getHours();
    return `${hours} hours later`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftPart}>
          <Image
            style={styles.image}
            source={{
              uri: listItem.thumbnail,
            }}
          />

          <View style={styles.infoContainer}>
            <Text style={styles.cardTitle}>{listItem.title}</Text>
            <Text style={styles.cardTypeText}>{listItem.type}</Text>
            <View style={styles.clockContainer}>
              <Clock />
              <Text style={styles.hourText}>
                {parseDate(listItem.earliestTimeAvailable)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.rightPart}>
          <View style={styles.heartButton}>
            <Hearth />
          </View>
          <View style={styles.ratingContainer}>
            <Bluestar />
            <Text style={styles.ratingText}>{listItem.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;
