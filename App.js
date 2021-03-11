import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Main from './Screens/Main';
import Chat from './Screens/Chat';
import { AppTabNavigator } from './components/AppTabNavigator';
export default class App extends React.Component {
  render(){
  return (
 
          <AppContainer/>
      )
  
  };
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen:AppTabNavigator},
  Main:{screen:Main},
  Chat:{screen:Chat}
})
  
const AppContainer =  createAppContainer(switchNavigator);


