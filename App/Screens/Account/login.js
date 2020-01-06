import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {Divider, Button} from 'react-native-elements';
import LoginForm from '../../Components/Account/loginForm';

export default function login(props) {
  const {navigation} = props;
  return (
    <ScrollView>
      <Image
        source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm />
        <CreateAccount navigation={navigation} />
        {/* <Button title='Crear formulario'></Button> */}
      </View>
      <Divider style={styles.divider}></Divider>
      {/* el divider es una línea para separar en la página*/}
      <View style={styles.viewContainer}>
        <Text>Login Facebook....</Text>
      </View>
    </ScrollView>
  );
}
//Es un componente ya que empieza con mayúsculas
function CreateAccount(props) {
  const {navigation} = props;
  return (
    <Text style={styles.textRegister}>
      Aún no tienes una cuenta.
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate('register')}>
        Registrarte
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginTop: 20,
    height: 120,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: '#00a680',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#0068a0',
    margin: 40,
  },
});
