import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import Tabs from '../components/tabs';
import History from '../components/history';
import Body from '../components/body';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Body navigation={navigation} />
        <History />
      </View>
      <Tabs navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Home;
