import * as React from "react";
import { View, Text } from "react-native";
import TabViewExample from "./swipper_idea";
import TextTicker from "react-native-text-ticker";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

var today = mm + "/" + dd + "/" + yyyy;

const Idea = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        margin: 20,
        overflow: "hidden"        
      }}
    >
      <View style={{flex: 0.15}}>
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
            Empfehlung
          </Text>
        </View>
      <View style={{ flex: 1 }}>
        <TabViewExample></TabViewExample>
      </View>
      <View style={{ flex: 0.25, flexDirection: "column", padding: 10 }}>
        <Text
          style={{
            color: "#35424a",
            fontFamily: "Asap",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Börsenticker
        </Text>
        <Text
          style={{
            color: "#aaaaaa",
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          Von Wallstreet-Online.de
        </Text>
        <Text
          style={{
            color: "#7a7a7a",
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: 14,
            marginTop: 30
          }}
        >
          {today}
        </Text>
        <TextTicker
          style={{
            color: "#35424a",
            fontFamily: "Asap",
            fontWeight: "bold",
            fontSize: 20,
          }}
          duration={10000}
          loop
          repeatSpacer={50}
          marqueeDelay={1000}
        >
          Super long piece of text is long. The quick brown fox jumps over the
          lazy dog.
        </TextTicker>
      </View>
    </View>
  );
};

export default Idea;
