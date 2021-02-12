import React from "react";
import { View, Text, processColor } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LineChart } from 'react-native-charts-wrapper'
import AxisLineChartScreen from './graph'


const Content = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 20,
      }}
    >
      <View style={{ flex: 1, marginBottom: 30 }}>
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
            Home
          </Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", marginTop: 5, padding: 10 }}
        >
          <View>
            <FontAwesome name="user-circle" size={56} />
          </View>
          <View style={{ marginLeft: 25, paddingTop: 10 }}>
            <Text
              style={{
                fontFamily: "Asap",
                fontWeight: "bold",
                fontSize: 16,
                color: "#35424a",
              }}
            >
              User Name
            </Text>
            <Text
              style={{
                fontFamily: "Helvetica",
                fontWeight: "400",
                fontSize: 14,
                color: "#c0c0c0",
              }}
            >
              user.name@email.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          backgroundColor: "#dee2e6",
          borderRadius: 9,
          padding: 10,
          marginBottom: 30
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#f7f6f6",
            borderRadius: 9,
            marginBottom: 5,
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
              fontFamily: "Asap",
              fontWeight: "bold",
              fontSize: 16,
              color: "#35424a",
              padding: 8,
            }}
          >
            Gesamtes Vermögen
          </Text>
          <Text
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontSize: 24,
              color: "#ffa834",
              paddingLeft: 8,
            }}
          >
            53.278 Euro
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#f7f6f6",
            borderRadius: 9,
            marginTop: 5,
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
              fontFamily: "Asap",
              fontWeight: "bold",
              fontSize: 16,
              color: "#35424a",
              padding: 8,
            }}
          >
            Gesamtes Gewinn
          </Text>
          <Text
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontSize: 24,
              color: "#ffa834",
              paddingLeft: 8,
            }}
          >
            11.534 Euro
          </Text>
        </View>
      </View>
      <View style={{ flex: 1.7}}>
        <AxisLineChartScreen></AxisLineChartScreen>
      </View>
    </View>
  );

};


export default Content;
