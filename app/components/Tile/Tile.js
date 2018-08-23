import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Tile = (props) => {
  const { onPress, tileText } = props;

  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <Text style={styles.text}>{tileText}</Text>
    </TouchableOpacity>
  );
}

export default Tile;
