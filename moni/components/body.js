import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import Icon from './icon';
import BlueCircle from '../ui/blueCircle.png';
import WaterBackground from '../ui/waterBackground.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Body = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.containerBackground}
      source={WaterBackground}>
      <View style={styles.container}>
        <BodyHeader navigation={navigation} />
        <BodyContent />
        <BodyActions />
      </View>
    </ImageBackground>
  );
};

const BodyHeader = ({navigation: {navigate}}) => {
  const toSettings = () => navigate('Settings');

  return (
    <View style={styles.bodyHeader}>
      <Text>yser</Text>
      <TouchableWithoutFeedback onPress={toSettings}>
        <Icon icon="settings" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const BodyContent = ({number = 15, metrics = 'm^3'}) => {
  return (
    <View style={styles.bodyContent}>
      <ImageBackground style={styles.bodyImageBackground} source={BlueCircle}>
        <Text style={styles.bodyNumber}>{number}</Text>
        <Text style={styles.bodyCountType}>{metrics}</Text>
      </ImageBackground>
    </View>
  );
};

const BodyActions = () => {
  return (
    <View style={styles.bodyActions}>
      <Action icon="pay" action="payment" />
      <Action icon="devide" action="devide" />
      <Action icon="stats" action="stats" />
    </View>
  );
};

const Action = ({action, icon}) => {
  return (
    <View style={styles.action}>
      <Icon icon={icon} />
      <Text style={styles.actionText}>{action}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  containerBackground: {
    display: 'flex',
  },
  bodyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: '45%',
  },
  bodyContent: {
    display: 'flex',
    alignItems: 'center',
  },
  bodyImageBackground: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyNumber: {
    fontSize: 40,
    color: '#ffffff',
  },
  bodyCountType: {
    fontSize: 20,
    color: '#ffffff',
  },
  bodyActions: {
    margin: 15,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  action: {
    // width: 55,
    // height: 55,
    borderRadius: 30,
    display: 'flex',
    // backgroundColor: '#ffffff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    paddingTop: 7,
    color: '#ffffff',
  },
});

export default Body;
