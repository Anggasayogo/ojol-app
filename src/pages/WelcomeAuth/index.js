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
const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#A55EEA',
          marginBottom: 10,
        }}></View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#A55EEA',
          marginBottom: 76,
        }}>
        Selamat Datang Di Ojol-App
      </Text>
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

export default WelcomeAuth;
