import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import MainScreen from './main';
import CreateAccount from './CreateAccount';
import Question from './question';

function HomeScreen({ navigation }) {
  return (
    <MainScreen navigation={navigation}></MainScreen>
  );
}


function Login({ navigation }) {
  return (
<LoginScreen navigation={navigation}></LoginScreen>

  );
}
function Account({ navigation }) {
  return (
    <CreateAccount navigation={navigation}></CreateAccount>
  );
}
function Questionnaire({ navigation }) {
  return (
    <Question navigation={navigation}></Question>
  );
}


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen name="Create" component={Account} options={{ headerShown: true, title:"", headerStyle: {backgroundColor: 'white'}, headerTransparent: true, headerLeftContainerStyle:{paddingLeft:11}, headerTintColor: '#ffa834'}} />      
        <Stack.Screen name="Questionnaire" component={Questionnaire} options={{ headerShown: true, title:"", headerStyle: {backgroundColor: 'white'}, headerTransparent: true, headerLeftContainerStyle:{paddingLeft:11}, headerTintColor: '#ffa834'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigator;