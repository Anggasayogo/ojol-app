import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButon from './ActionButon';
import {colors} from '../../utils';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang Di Ojol-App</Text>
      <ActionButon
        desc="Silahkan Masuk jika anda sudah memiliki akun"
        title="Masuk"
      />
      <ActionButon
        desc="atau silahkan daftar jika anda belum memiliki akun"
        title="Register"
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    illustration: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
