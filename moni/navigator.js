import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import Devices from './screens/devices';
import Users from './screens/users';
import Login from './screens/login';
import QrCode from './screens/qrcode';
import More from './screens/more';
import Settings from './screens/settings';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Devices" component={Devices} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default Navigator;
