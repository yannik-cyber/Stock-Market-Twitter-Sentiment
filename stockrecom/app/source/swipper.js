import React, { Component, useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import List from './list'

const Swipe = () => {
  const [activeBtn, setActiveBtn] = useState("red");
  const [activeBtn2, setActiveBtn2] = useState("white");
  const [activeText, setActiveText] = useState({
    fontSize: 14,
    color: "#35424a",
    padding: 10,
    paddingTop: 20,
    fontFamily: "Asap",
    fontWeight: "bold",
  });
  const [activeText2, setActiveText2] = useState({
    fontSize: 14,
    color: "#d6d6d6",
    padding: 10,
    paddingTop: 20,
    fontFamily: "Asap",
    fontWeight: "600"});

  const test_function = (state) => {
    if (state == 0) {
      setActiveBtn("red");
      setActiveBtn2("white");
      setActiveText({
        fontSize: 14,
        color: "#35424a",
        padding: 10,
        paddingTop: 20,
        fontFamily: "Asap",
        fontWeight: "bold",
      });
      setActiveText2({fontSize: 14,
        color: "#d6d6d6",
        padding: 10,
        paddingTop: 20,
        fontFamily: "Asap",
        fontWeight: "600"});
    } else {
      setActiveBtn("white");
      setActiveBtn2("red");
      setActiveText2({
        fontSize: 14,
        color: "#35424a",
        padding: 10,
        paddingTop: 20,
        fontFamily: "Asap",
        fontWeight: "bold",
      });
      setActiveText({fontSize: 14,
        color: "#d6d6d6",
        padding: 10,
        paddingTop: 20,
        fontFamily: "Asap",
        fontWeight: "600"});
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            nativeID="text_zero"
            style={{
              fontSize: 14,
              color: "#35424a",
              padding: 10,
              paddingTop: 20,
              fontFamily: "Asap",
              fontWeight: "bold",
            }}
          >
            Portfolio
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            id="text_one"
            style={{fontSize: 14,
              color: "#d6d6d6",
              padding: 10,
              paddingTop: 20,
              fontFamily: "Asap",
              fontWeight: "600"}}
          >
            Beobachten
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.02,
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 6,
          flexDirection: "row",
        }}
      >
        <View
          id="bar_zeron"
          style={{ backgroundColor: activeBtn, flex: 1 }}
        ></View>
        <View
          id="bar_one"
          style={{ backgroundColor: activeBtn2, flex: 1 }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Swiper
          showsButtons={false}
          showsPagination={false}
          loop={false}
          onIndexChanged={test_function}
        >
          <View>
            <View>
              <List></List>
            </View>
          </View>
          <View>
            <List></List>
          </View>
        </Swiper>
      </View>
    </View>
  );
};



export default Swipe;
