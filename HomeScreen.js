import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MyHomeScreen from './MyHomeScreen';
import MyNotificationsScreen from './MyNotificationsScreen';

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},
  {
    drawerWidth: 200,
    drawerPosition: 'left',
  });


AppRegistry.registerComponent('LearnRN', () => MyApp);
