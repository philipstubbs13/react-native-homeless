import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Emergency extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Emergency</Text>
      </Container>
    );
  }
}

export default Emergency;