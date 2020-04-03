import React from 'react';
import Recat, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Register');
    }, 2000);
  });
  return (
    <View>
      <Text> Splash screen </Text>
    </View>
  );
};

export default Splash;
