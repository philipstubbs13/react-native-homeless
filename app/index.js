import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Help from './screens/Help';
import Emergency from './screens/Emergency';
import Feedback from './screens/Feedback';
import Food from './screens/Food';
import Shelters from './screens/Shelters';
import Bible from './screens/Bible';

EStyleSheet.build({
    $primaryBlue: '#4F607A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#ffffff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
});


export default () => <Home />;