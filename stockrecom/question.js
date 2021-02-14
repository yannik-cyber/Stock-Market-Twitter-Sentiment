import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import SelectMultiple from 'react-native-select-multiple'


 
const fruits = ['Ich kann mich leicht anpassen, wenn finanziell etwas schief geht', 'Wenn um hohe Summen geht verspüre ich Nervenkitzel', 'Verluste kann ich gut einschätzen, machen mir aber keine Angst', 'Ich fahre gerne schnell mit dem Auto']


export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: '18' };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

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
        <View style={{ flex: 0.5, marginBottom: 30, marginTop: 10 }}>
          <View>
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
              Registrieren
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ffa834",
              flex: 0.6,
              borderRadius: 6,
              borderColor: "#ebebeb",
              borderWidth: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 0.8,
            flexDirection: "column",
          }}
        >
          <View style={{ flex: 0.9 }}>
            <Text
              style={{
                color: "#ffa834",
                fontFamily: "Asap",
                fontWeight: "600",
                fontSize: 18,
                padding: 10,
              }}
            >
              Alter
            </Text>
          </View>
          <View
            style={{
              flex: 1.1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <TouchableOpacity
              style={{                
                borderWidth: 1.3,
                borderColor: "#d6d6d6",
                height: 32,
                borderRadius: 3,
                padding: 0,
                width: 58,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  this.state.selectedButton === "18" ? "#ffa834" : "#ffffff",
              }}
              onPress={() => this.selectionOnPress("18")}
            >
              <Text style={{color: this.state.selectedButton === "18" ? "#ffffff" :"#35424a",}}>18 - 29</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{            
                borderWidth: 1.3,
                borderColor: "#d6d6d6",
                height: 32,
                borderRadius: 3,
                padding: 0,
                width: 58,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  this.state.selectedButton === "30" ? "#ffa834" : "#ffffff",
              }}
              onPress={() => this.selectionOnPress("30")}
            >
              <Text style={{color: this.state.selectedButton === "30" ? "#ffffff" :"#35424a",}}>30 - 49</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1.3,
                borderColor: "#d6d6d6",
                height: 32,
                borderRadius: 3,
                padding: 0,
                width: 58,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  this.state.selectedButton === "50" ? "#ffa834" : "#ffffff",
              }}
              onPress={() => this.selectionOnPress("50")}
            >
              <Text style={{color: this.state.selectedButton === "50" ? "#ffffff" :"#35424a",}}>50 - 64</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1.3,
                borderColor: "#d6d6d6",
                height: 32,
                borderRadius: 3,
                padding: 0,
                width: 58,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: this.state.selectedButton === "65" ? "#ffa834" : "#ffffff",
              }}
              onPress={() => this.selectionOnPress("65")}
            >
              <Text style={{color: this.state.selectedButton === "65" ? "#ffffff" :"#35424a",}}>65+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 2,            
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
        <View
          style={{
            flex: 1,            
          }}
        >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{flex: 0.7, backgroundColor: '#ffa834', margin: 10, borderRadius: 6, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 1,

            elevation: 3,justifyContent: "center", alignItems: 'center'}}><Text style={{color: '#ffffff', fontFamily: 'Asap', fontWeight: '600', fontSize: 17}}>Fertig!</Text></TouchableOpacity>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}><Text style={{color: '#989eb1', fontFamily: 'Asap', fontWeight: '600', fontSize: 14}}>Bereits Registriert? </Text><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={{color: '#ffa834', fontFamily: 'Asap', fontWeight: '600', fontSize: 14}}>Zur Anmeldung</Text></TouchableOpacity></View>
        </View>
      </View>
    );
  }
}
