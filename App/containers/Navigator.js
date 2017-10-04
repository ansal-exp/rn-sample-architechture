import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import LoginScreen from './LoginScreen'
import PhonesList from './PhonesList'
import Details from './DetailsPage'

//Top level navigator

export default AppNavigator = StackNavigator({
  Login: {screen: LoginScreen,navigationOptions: { header: null } },
  PhonesList: {screen: PhonesList,},
  Details: {screen: Details,},
});