import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ActionButon = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: '#7e7e7e',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#A55EEA',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButon;
