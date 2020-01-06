import {createStackNavigator} from 'react-navigation-stack';
import searchScreen from '../Screens/search';

const searchScreenStacks = createStackNavigator({
  search: {
    screen: searchScreen,
    navigationOptions: () => ({
      title: 'Búsqueda',
    }),
  },
});

export default searchScreenStacks;
