import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  console.log('in login');
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Text>To Profile</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default Login;
