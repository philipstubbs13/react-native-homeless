import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Tiles extends Component {

  handleHelpPress = () => {
    console.log('Help press');
    this.props.navigation.navigate('Help');
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
          <TouchableOpacity onPress={this.handleHelpPress} style={styles.tile}>
            <Text style={styles.text}>Using the app</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleEmergencyPress} style={styles.tile}>
            <Text style={styles.text}>Emergency</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tileRow}>
          <TouchableOpacity onPress={this.handleSheltersPress} style={styles.tile}>
            <Text style={styles.text}>Shelters</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleFoodPress} style={styles.tile}>
            <Text style={styles.text}>Food Shelves</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tileRow}>
          <TouchableOpacity onPress={this.handleBiblePress} style={styles.tile}>
            <Text style={styles.text}>Bible</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleFeedbackPress} style={styles.tile}>
            <Text style={styles.text}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 


export default Tiles;