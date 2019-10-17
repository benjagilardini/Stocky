import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: FirstPage },
    Add : { screen: AddScreen },
    Edit: { screen: EditScreen }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1.5,
      },
    },
  }
);
 
//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
  },
});
export default createAppContainer(App);