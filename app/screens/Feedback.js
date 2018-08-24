import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { AppInput } from '../components/AppInput';

import styles from './styles';

class Feedback extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <AppInput />
      </Container>
    );
  }
}

export default Feedback;