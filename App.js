import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/router/index';

let theme = {
  color_text_primary_test: '#00ff00',
  color_bg_primary: '#e54545',
  color_lg_button1: ['#f26d61', '#e64545'],
};
const theme2 = {
  color_text_primary_test: '#00ffff',
  color_lg_button1: ['#00ff00', '#00ffff'],
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
    );
  }
}