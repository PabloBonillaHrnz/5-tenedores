import {createStackNavigator} from 'react-navigation-stack';
import myAccountScreen from '../Screens/Account/myAccount';
import loginScreen from '../Screens/Account/login';
import registerScreen from '../Screens/Account/register';

const myAccountScreenStacks = createStackNavigator({
  myAccount: {
    screen: myAccountScreen,
    navigationOptions: () => ({
      title: 'Cuenta',
    }),
  },
  login: {
    screen: loginScreen,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  register: {
    screen: registerScreen,
    navigationOptions: () => ({
      title: 'Registro',
    }),
  },
});

export default myAccountScreenStacks;
