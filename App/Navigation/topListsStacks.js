import {createStackNavigator} from 'react-navigation-stack';
import topRestaurantsScreen from '../Screens/topRestaurants';

const topListsStacksScreen = createStackNavigator({
  topRestaurants: {
    screen: topRestaurantsScreen,
    navigationOptions: () => ({
      title: 'Los mejores restaurantes en México',
    }),
  },
});

export default topListsStacksScreen;
