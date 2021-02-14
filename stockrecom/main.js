import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Content from "./app/source/home";
import Portfolio from "./app/source/portfolio";
import Idea from "./app/source/idea";
import Setting from "./app/source/settings";

function Home() {
  return (
     <Content></Content>
  );
}
function Portfolio_tab() {
  return (    
      <Portfolio></Portfolio>    
  );
}
function Empfehlung() {
  return (
    <Idea></Idea>
  );
}


function Settings() {
  return (
<Setting></Setting>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#ffa834',
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio_tab"
        component={Portfolio_tab}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Empfehlung"
        component={Empfehlung}
        options={{
          tabBarLabel: 'Empfehlung',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainScreen() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}