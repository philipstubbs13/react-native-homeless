import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Food extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Food Shelves</Text>
      </Container>
    );
  }
}

export default Food;