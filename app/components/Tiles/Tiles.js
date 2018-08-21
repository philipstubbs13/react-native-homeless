import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tiles = () => (
  <View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text>Using the app</Text>
      </View>
      <View style={styles.tile}>
        <Text>Emergency</Text>
      </View>
    </View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text>Shelters</Text>
      </View>
      <View style={styles.tile}>
        <Text>Food Shelves</Text>
      </View>
    </View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text>Bible</Text>
      </View>
      <View style={styles.tile}>
        <Text>Feedback</Text>
      </View>
    </View>
  </View>
);

export default Tiles;