import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Feedback extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Text>Feedback</Text>
      </Container>
    );
  }
}

export default Feedback;