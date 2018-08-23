import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { Tile, TileRow } from '../components/Tile';
import { Header } from '../components/Header';
import styles from './styles';

class Home extends Component {

  handleHelpPress = () => {
    console.log('Help press');
    // 
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
      <Container>
        <Header />
        <View style={styles.tileRow} >
          <Tile 
            onPress={this.handleHelpPress}
            tileText="Using the app"
          />
          <Tile
            onPress={this.handleEmergencyPress}
            tileText="Emergency"
          />
        </View>
        <View style={styles.tileRow} >
          <Tile
            onPress={this.handleSheltersPress}
            tileText="Shelters"
          />
          <Tile
            onPress={this.handleBiblePress}
            tileText="Bible"
          />
        </View>
        <View style={styles.tileRow}>
          <Tile
            onPress={this.handleFoodPress}
            tileText="Food Shelves"
          />
          <Tile
            onPress={this.handleFeedbackPress}
            tileText="Feedback"
          />
        </View>
      </Container>
    );
  }
}

export default Home;
