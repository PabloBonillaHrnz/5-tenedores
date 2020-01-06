import React, {useRef} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
//sirve para que el teclado no tape el contemido de la página
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../Components/Account/RegisterForm';
//sirve para mandar alertas a los usuarios
import Toast from 'react-native-easy-toast';

export default function register() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="top" opacity={0.8} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
