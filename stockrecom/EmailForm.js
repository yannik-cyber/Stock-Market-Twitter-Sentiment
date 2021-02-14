import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { setToken } from "./token";

const EmailForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = () => {
    onSubmit(email, password)
      .then(async (res) => {
        await setToken(res.auth_token);
        onAuthentication();
      })
      .catch((res) => setErrorMessage(res.error));
  };

  return (
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
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
      />
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
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={submit}
        style={{
          width: 280,
          height: 48,
          backgroundColor: "#ffa834",
          borderRadius: 6,
          alignSelf: "center",
          marginTop: 50,
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
          {buttonText}
        </Text>
      </TouchableOpacity>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
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

export default EmailForm;
