import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Tiles } from '../components/Tiles';
import { Header } from '../components/Header';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Tiles />
      </Container>
    );
  }
}

export default Home;
