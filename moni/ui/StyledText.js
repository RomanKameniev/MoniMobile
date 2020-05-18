import React from 'react';
import {Text} from 'react-native';

const StyledText = ({fs = 14, text}) => {
  return <Text style={{fontSize: fs}}>{text}</Text>;
};

export default StyledText;
