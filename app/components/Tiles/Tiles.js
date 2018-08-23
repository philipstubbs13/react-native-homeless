import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Tiles extends Component {

  handleHelpPress = () => {
    console.log('Help press');
    // this.props.navigation.navigate('Options');
  };

  handleEmergencyPress = () => {
    console.log('Emergency press');
    // this.props.navigation.navigate('Options');
  };

  handleSheltersPress = () => {
    console.log('Shelters press');
    // this.props.navigation.navigate('Options');
  };

  handleFoodPress = () => {
    console.log('Food Shelves press');
    // this.props.navigation.navigate('Options');
  };

  handleBiblePress = () => {
    console.log('Bible press');
    // this.props.navigation.navigate('Options');
  };

  handleFeedbackPress = () => {
    console.log('Feedback press');
    // this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <View>
        <View style={styles.tileRow}>
          <TouchableOpacity onPress={this.handleHelpPress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Using the app</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleEmergencyPress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Emergency</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tileRow}>
          <TouchableOpacity onPress={this.handleSheltersPress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Shelters</Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleFoodPress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Food Shelves</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tileRow}>
          <TouchableOpacity onPress={this.handleBiblePress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Bible</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleFeedbackPress}>
            <View style={styles.tile}>
              <Text style={styles.text}>Feedback</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 


export default Tiles;