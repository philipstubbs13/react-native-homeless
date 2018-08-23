import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Help extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Using the app</Text>
      </Container>
    );
  }
}

export default Help;