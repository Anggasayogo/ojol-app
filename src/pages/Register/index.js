import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from '../../components';
import {RegisterImage} from '../../assets';
import {colors} from '../../utils';
import {BackIcon} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('data yang dikirim', form);
  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={BackIcon} style={styles.wrapper.iconBack} />
        <Image source={RegisterImage} style={styles.wrapper.imageHero} />
        <Text style={styles.wrapper.title}>
          Mohon mengisi form register untuk pembuatan account anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullname')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Register" onPress={sendData} />
      </ScrollView>
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
