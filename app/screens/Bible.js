import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Bible extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Bible</Text>
      </Container>
    );
  }
}

export default Bible;