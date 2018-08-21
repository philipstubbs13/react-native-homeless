import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tiles = () => (
  <View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text style={styles.text}>Using the app</Text>
      </View>
      <View style={styles.tile}>
        <Text style={styles.text}>Emergency</Text>
      </View>
    </View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text style={styles.text}>Shelters</Text>
      </View>
      <View style={styles.tile}>
        <Text style={styles.text}>Food Shelves</Text>
      </View>
    </View>
    <View style={styles.tileRow}>
      <View style={styles.tile}>
        <Text style={styles.text}>Bible</Text>
      </View>
      <View style={styles.tile}>
        <Text style={styles.text}>Feedback</Text>
      </View>
    </View>
  </View>
);

export default Tiles;