import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import SelectMultiple from 'react-native-select-multiple'


 
const fruits = ['Benachrichtung', ]


export default class Setting extends React.Component {

  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }  
  state = { selectedFruits: [] }
 
  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }
 

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: 20,
          backgroundColor: "#ffffff",
        }}
      >
        <View style={{ flex: 0.5, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 25,
                color: "#35424a",
                padding: 10,
                paddingTop: 20,
                fontFamily: "Quicksand",
                fontWeight: "700",
              }}
            >
              Einstellungen
            </Text>
        </View>

        <View
          style={{
            flex: 3,            
          }}
        >
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange}  
          checkboxStyle={{tintColor: '#cccccc'}}          
          selectedCheckboxStyle={{tintColor: '#ffa834'}} 
          rowStyle={{borderBottomWidth: 0}}
            />
        </View>
      </View>
    );
  }
}
