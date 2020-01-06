//create the bottom tab Bar and call all the info of the js file restaurantsStacks
import React from 'react'; //se tiene que poner react antes de cualquier otra libreria relacionada con ella (react-native,react-native-elements, etc)
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import restaurantsScreenStacks from './restaurantsStacks';
import topListsScreenStacks from './topListsStacks';
import searchScreenStacks from './searchStacks';
import myAccountScreenStacks from './myAccountStacks';

const navigationStacks = createBottomTabNavigator(
  {
    restaurants: {
      screen: restaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Restaurantes',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    topRestaurants: {
      screen: topListsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Ranking',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    search: {
      screen: searchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Buscar',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    myAccount: {
      screen: myAccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Cuenta',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="material-community"
            name="account-circle"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'myAccount', //Es donde siempre va a inicializar mi página cuando abran la aplicación
    order: ['restaurants', 'topRestaurants', 'search', 'myAccount'], //ordena los objetos como los queremos
    tabBarOptions: {
      //designa los colores cuando esta activo y desactivado
      inactiveTintColor: '#646464',
      activeTintColor: '#00A680',
    },
  },
);

export default createAppContainer(navigationStacks);
