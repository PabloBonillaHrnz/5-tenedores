import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/validation';
import * as firebase from 'firebase';
import Loading from '../Loading';
//te permite tener navegación entre páginas por medio de algún botón.
import {withNavigation} from 'react-navigation';
//todos los componentes necesitan empezar con mayúscula a fuerzassssss
function RegisterForm(props) {
  console.log(props);
  //Se hace destructuring para obtener los props de toda la lista de objetos
  const {toastRef, navigation} = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [hideSecondPassword, setHideSecondPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatedPassword] = useState('');
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  //la funcion async hace que el usuario no haga nada hasta que haya terminado de registrarse o le haya dado error
  const register = async () => {
    setIsVisibleLoading(true);
    if (!email || !password || !repeatPassword) {
      toastRef.current.show('Todos los campos son obligatorios');
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show('Ingresaste incorrectamente el correo');
      } else {
        if (password.length < 6) {
          toastRef.current.show('La contraseña debe tener mínimo 6 caracteres');
        } else {
          if (password != repeatPassword) {
            toastRef.current.show('Las contraseñas son diferentes');
          } else {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                navigation.navigate('myAccount');
              })
              .catch(() => {
                toastRef.current.show(
                  'Error al crear la cuenta, por favor inténtalo de nuevo',
                );
              });
          }
        }
      }
    }
    setIsVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange={correo => setEmail(correo.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={contra => setPassword(contra.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? 'eye-outline' : 'eye'}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        password={true}
        secureTextEntry={hideSecondPassword}
        containerStyle={styles.inputForm}
        onChange={contra => setRepeatedPassword(contra.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hideSecondPassword ? 'eye-outline' : 'eye'}
            iconStyle={styles.iconRight}
            onPress={() => setHideSecondPassword(!hideSecondPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
      <Loading text="Creando cuenta" isVisible={isVisibleLoading} />
    </View>
  );
}
export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: '#c1c1c1',
  },
  btnContainerRegister: {
    marginTop: 20,
    width: '95%',
  },
  btnRegister: {
    backgroundColor: '#00a680',
  },
});
