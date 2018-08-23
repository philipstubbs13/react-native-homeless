import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Help from '../screens/Help';
import Emergency from '../screens/Emergency';
import Feedback from '../screens/Feedback';
import Food from '../screens/Food';
import Shelters from '../screens/Shelters';
import Bible from '../screens/Bible';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Emergency: {
    screen: Emergency,
    navigationOptions: {
      headerTitle: 'Emergency',
    },
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headerTitle: 'Help',
    },
  },
  Shelters: {
    screen: Shelters,
    navigationOptions: {
      headerTitle: 'Shelters',
    },
  },
  Food: {
    screen: Food,
    navigationOptions: {
      headerTitle: 'Food Shelves',
    },
  },
  Bible: {
    screen: Bible,
    navigationOptions: {
      headerTitle: 'Bible',
    },
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      headerTitle: 'Feedback',
    },
  },
}, {
  headerMode: 'screen',
});

export default createStackNavigator({
  Home: {
    screen: HomeStack,
  },
});
