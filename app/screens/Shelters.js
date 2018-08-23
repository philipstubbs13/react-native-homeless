import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Shelters extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Shelters</Text>
      </Container>
    );
  }
}

export default Shelters;