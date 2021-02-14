import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { login } from "./mock";
import EmailForm from "./EmailForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#abb5be', fontSize: 31, fontFamily: 'Asap', fontWeight: '600', letterSpacing: 1}}>FinTech Consulting</Text>
      </View>
      <View style={{ flex: 1}}>
        <View style={{flex: 0.2}}>
          <Text style={{ color: '#35424a', fontFamily: 'Quicksand', fontWeight: '700', fontSize: 26, marginLeft: 40}}>Anmeldung</Text>
          <Text style={{ color: '#989eb1', fontFamily: 'Asap', fontWeight: '400', fontSize: 16, marginLeft: 40, marginTop: 10}}>Schön dich wiederzusehen</Text>
        </View>
        <View style={{ flex: 1, marginTop: 10}}>
        <EmailForm
          buttonText="Log in"      
          onSubmit={login}
          onAuthentication={() => navigation.navigate("Home")}
        >
        <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
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
      >  
        <Text
          style={{
            color: "#ffffff",
            fontFamily: "Asap",
            fontWeight: "600",
            fontSize: 17,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
        </EmailForm>
        </View>
      </View>      
    </View>
  );
};

export default LoginScreen;
