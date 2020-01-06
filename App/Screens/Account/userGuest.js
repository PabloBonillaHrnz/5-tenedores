import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image, Buttom} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

function userGuest(props) {
  const {navigation} = props;

  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require('../../../assets/img/user-guest.jpg')}
        style={styles.image}
        resizeMode="contain"></Image>
      <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla. Vota cuál te ha gustado más y
        comenta cuál ha sido tu experiencia{' '}
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ve tu perfil"
          onPress={() => navigation.navigate('login')}
          // en navigation.navigate('login') se direcciona a el nombre de la página  (alias) que pusimos en myAccountStacks.js no al archivo login.js
        />
      </View>
    </ScrollView>
  );
}
export default withNavigation(userGuest);

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: '#00a680',
  },
  btnContainer: {
    width: '70%',
  },
});
