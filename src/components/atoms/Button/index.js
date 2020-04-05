import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.warpper.components} onPress={onPress}>
      <Text style={styles.warpper.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  warpper: {
    components: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
    text: {
      title: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
      },
    },
  },
};

export default Button;
