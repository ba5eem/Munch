import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image,Button } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import Home from './Home';
import Fav from './Fav';




const Screens = {
    Home: { screen: Home },
    Favs: { screen: Fav }

  };



const Navigation = TabNavigator(
  Screens,
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Community') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Favs') {
          iconName = `ios-basket${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Map') {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Artists') {
          iconName = `ios-flower${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);




class Hub extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};
  }









  render() {
    return (
      
      <Navigation/>
    );
  }
}


export default Hub;