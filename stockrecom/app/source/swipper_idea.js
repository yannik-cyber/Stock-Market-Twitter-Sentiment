import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Idea1_nav from './first_route'
import Idea2_nav from './second_route'
import Idea3_nav from './third_route'

const FirstRoute = () => (
    <Idea1_nav></Idea1_nav>
);
 
const SecondRoute = () => (
  <Idea2_nav></Idea2_nav>
);

const thirdRoute = () => (
  <Idea3_nav></Idea3_nav>
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
renderLabel = ({ route, focused, color }) => {
  return (
    <View>
      <Text
        style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
      >
        {route.title}
      </Text>
    </View>
  )
  }

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '8% - hoch' },
    { key: 'second', title: '5% - mittel' },
    { key: 'third', title: '1% - gering' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: thirdRoute,
  });
 
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      removeClippedSubviews={true}
      sceneContainerStyle={{overflow: 'hidden'}}
      style={{}}
      renderTabBar={props =>
        <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#eeaf3b',}}
        style={{ backgroundColor: 'transparent'}}
        renderLabel={this.renderLabel}
        />
    }
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  activeTabTextColor: {
    color: '#35424a',
    fontFamily: "Asap",
	  fontWeight: 'bold',
    fontSize: 14,
    width: 100,
    textAlign: 'center'
  },
  tabTextColor: {
    color: '#d6d6d6',
    fontFamily: "Asap",
	  fontWeight: '600',
    fontSize: 14,
    width: 100,
    textAlign: 'center'
  }
});