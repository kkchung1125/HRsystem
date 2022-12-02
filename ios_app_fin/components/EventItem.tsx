import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface itemType {
  id: number;
  event_name: string;
  date: string;
  details: string;
}

function EventItem({data, index}: {data: itemType; index: number}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>{`${index + 1}. ${
        data.event_name
      }`}</Text>
      <Text style={styles.textContainer}>{data.details}</Text>
    </View>
  );
}

export default EventItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 3,
  },
  textContainer: {
    fontSize: 20,
    marginRight: 30,
  },
});
