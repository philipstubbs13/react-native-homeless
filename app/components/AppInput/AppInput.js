import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

const AppInput = (props) => {
//   const { onPress, buttonText, editable = true } = props;

  return (
    <View>
      <View>
        <Text style={styles.text}>Please rate your experience with the app</Text>
      </View>
      <View>
        <Text style={styles.text}>Comments</Text>
        <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
      </View>
    </View>
  );
};

export default AppInput;