import React from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import Icon from './icon';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const TABS = [
  {name: 'device', icon: 'device', link: 'Devices'},
  {name: 'user', icon: 'users', link: 'Users'},
  {name: 'qrcode', icon: 'qrcode', link: 'QrCode'},
  {name: 'more', icon: 'more', link: 'More'},
];

const Tabs = ({navigation}) => {
  return (
    <View style={styles.container}>
      {TABS.map((i, key) => {
        return <Tab key={key} navigation={navigation} {...i} />;
      })}
    </View>
  );
};

const Tab = ({name, icon, link, navigation: {navigate}}) => {
  const goTo = () => navigate(link);

  return (
    <TouchableWithoutFeedback onPress={goTo}>
      <View style={styles.tab}>
        <Icon icon={icon} />
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: 63,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowOffset: {width: 1},
    borderStyle: 'solid',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs;
