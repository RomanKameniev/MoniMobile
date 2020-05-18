import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const HISTORY = [
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
  {
    date: '13.08.2019',
    actions: [
      {
        type: 'allow',
        user: 'JaneNiko',
        ava:
          'https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg',
      },
    ],
  },
];

const screenHeight = Dimensions.get('window').height;

const History = () => {
  const [position, setPosition] = useState(360);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const onSwipeUp = gestureState => {
    setPosition(0);
  };

  const onSwipeDown = gestureState => {
    setPosition(360);
  };

  return (
    <View style={[styles.container, {top: position}]}>
      <GestureRecognizer
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        //   config={config}>
      >
        <View style={styles.containerSwap} />
      </GestureRecognizer>

      <ScrollView style={{height: screenHeight}}>
        {HISTORY.map((i, key) => (
          <HistoryItem key={key} {...i} />
        ))}
      </ScrollView>
    </View>
  );
};

const HistoryItem = ({date, actions}) => {
  return (
    <View style={styles.historyItem}>
      <Text style={styles.historyDate}>{date}</Text>
      {actions.length
        ? actions.map((i, key) => {
            return <ActionItem {...i} />;
          })
        : null}
    </View>
  );
};

const ActionItem = ({type, user, ava}) => {
  return (
    <View style={styles.actionItem}>
      <Image style={styles.actionAvatar} src={ava} alt="user avatar" />
      <Text style={styles.actionName}>{type}</Text>
      <Text style={styles.actionUser}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    top: 360,
    bottom: 40,
    paddingBottom:20,
    backgroundColor: '#ffffff',
    // borderTopColor: '#333',
    // borderStyle: 'solid',
    borderRadius: 25,
  },
  containerSwap: {
    height: 2,
    padding:2,
    width: 30,
    backgroundColor: '#333',
    alignSelf: 'center',
    margin: 10,
  },
  historyItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  historyDate: {
    fontSize: 12,
    color: '#bebebe',
  },
  actionItem: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 4,
  },
  actionAvatar: {
    width: 32,
    height: 32,
    borderRadius: 17,
    backgroundColor: 'red',
  },
  actionName: {
    fontSize: 12,
    color: '#333',
  },
  actionUser: {
    fontSize: 12,
    fontWeight: '800',
    color: '#333',
  },
});

export default History;
