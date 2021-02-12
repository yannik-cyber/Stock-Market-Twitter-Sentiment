import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  CheckBox
} from "react-native";
import { createAccount } from "./mock";

const CreateAccount = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);    

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 0.15 }}>
        <Text
          style={{
            margin: 20,
            marginTop: 30,
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
      <View style={{ flex: 1, marginTop: 50 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text
            style={{
              color: "#ffa834",
              fontFamily: "Asap",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Email
          </Text>
          <TextInput style={styles.input} keyboardType="email-address" />
          <Text
            style={{
              color: "#ffa834",
              fontFamily: "Asap",
              fontWeight: "600",
              fontSize: 14,
              marginTop: 20,
            }}
          >
            Passwort
          </Text>
          <TextInput style={styles.input} secureTextEntry />
          <Text
            style={{
              color: "#ffa834",
              fontFamily: "Asap",
              fontWeight: "600",
              fontSize: 14,
              marginTop: 20,
            }}
          >
            Passwort wiederholen
          </Text>
          <TextInput style={styles.input} secureTextEntry />
          <Text
            style={{
              color: "#ffa834",
              fontFamily: "Asap",
              fontWeight: "600",
              fontSize: 14,
              marginTop: 20,
            }}
          >
            Mobilnummer
          </Text>
          <TextInput style={styles.input} textContentType={'telephoneNumber'} keyboardType={'phone-pad'}/>
          <View style={{flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{marginLeft: 40}}
          tintColors={{true: '#ffa834'}}

        />
        <Text>Ich stimme den Nutzungsbedingung und Datenschutzrichtlinien zu.</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 280,
              height: 48,
              backgroundColor: "#ffa834",
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1,

              elevation: 3,
            }} 
            onPress={() => (isSelected === true) ? navigation.navigate('Questionnaire') : alert('Accept Terms of Use')}
          >
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "Asap",
                fontWeight: "600",
                fontSize: 17,
              }}

            >Weiter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    width: 300,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "#d4d4d4",
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 10,
  },
});

export default CreateAccount;
