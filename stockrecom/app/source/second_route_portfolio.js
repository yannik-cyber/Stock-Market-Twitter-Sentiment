import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Portfolio2 from './portfolio2'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <Portfolio2></Portfolio2>
  );
}

const Stack = createStackNavigator();

function Portfolio2_nav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Portfolio2_nav;
