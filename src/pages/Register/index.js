import React from 'react';
import {View, Text, Image} from 'react-native';
import {Input} from '../../components';
import {RegisterImage} from '../../assets';
import {colors} from '../../utils';
import {BackIcon} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={BackIcon} style={styles.wrapper.iconBack} />
      <Image source={RegisterImage} style={styles.wrapper.imageHero} />
      <Text style={styles.wrapper.title}>
        Mohon mengisi form register untuk pembuatan account anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      padding: 20,
      backgroundColor: 'white',
      flex: 1,
    },
    iconBack: {width: 25, height: 25},
    imageHero: {
      width: 106,
      height: 115,
      backgroundColor: 'purple',
      marginTop: 8,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};

export default Register;
