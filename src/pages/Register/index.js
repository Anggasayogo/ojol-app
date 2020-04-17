import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterImage} from '../../assets';
import {Button, Input} from '../../components';
import ButtonIcon from '../../components/atoms/Button/ButtonIcon';
import {setForm} from '../../redux';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('data yang dikirim', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonIcon
          name="back"
          type="icon"
          onPress={() => navigation.goBack()}
        />
        <Image source={RegisterImage} style={styles.wrapper.imageHero} />
        <Text style={styles.wrapper.title}>
          Mohon mengisi form register untuk pembuatan account anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
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
