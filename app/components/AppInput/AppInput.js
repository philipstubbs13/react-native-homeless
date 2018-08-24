import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Button } from 'react-native';

import styles from './styles';

const AppInput = (props) => {
//   const { onPress, buttonText, editable = true } = props;

  return (
    <View style={styles.feedback}>
      <View>
        <Text style={styles.text}>Please rate your experience with the app</Text>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.text}>Comments</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          multiline={true}
          numberOfLines={5}
          {...props}
        />
        <Button
          title="Send feedback"
          color='dodgerblue'
          accessibilityLabel="Send feedback"
        />
      </View>
    </View>
  );
};

export default AppInput;
