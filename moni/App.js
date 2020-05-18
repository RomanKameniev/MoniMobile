import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigator';

class App extends Component {
  render() {
    return <NavigationContainer>
      <Navigator />
    </NavigationContainer>;
  }
}

export default App;
