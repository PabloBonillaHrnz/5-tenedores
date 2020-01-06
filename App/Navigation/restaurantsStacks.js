//create the title and call all the info of the js file restaurants
import {createStackNavigator} from 'react-navigation-stack';
import restaurantsScreen from '../Screens/restaurants';

const restaurantsScreenStacks = createStackNavigator({
  //se crea la variable "restaurantsScreenStacks" para almacenar toda la función
  restaurants: {
    screen: restaurantsScreen, //se manda a llamar todo lo que tenga el archivo
    navigationOptions: () => ({
      title: 'Restaurantes', //Es el título de nuestra aplicación.
    }),
  },
});

export default restaurantsScreenStacks;
