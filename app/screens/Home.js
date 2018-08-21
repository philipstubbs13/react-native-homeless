import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Tiles } from '../components/Tiles';

class Home extends Component {
  render() {
    return (
      <Container>
        <Text>Home Screen</Text>
        <Tiles />
      </Container>
    );
  }
}

export default Home;
