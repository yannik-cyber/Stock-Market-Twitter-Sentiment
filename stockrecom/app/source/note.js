import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SmallGraph from "./smallGraph";
import PopupGraph from "./popupGraph";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Alert, Modal, TouchableHighlight } from "react-native";

let data = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
let aktuell = 307.71;
let veränderung = -1.83;
let veränderung_prozent = 0.83;

export default class Notes extends Component {
  state = {
    color: "#d6d6d6",
    iconName: "eye-slash",
    pressed: false,
    modalVisible: false,
    selectedButton: "w",
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  changeColor() {
    if (!this.state.pressed) {
      this.setState({ pressed: true, iconName: "eye", color: "#ffa834" });
    } else {
      this.setState({
        pressed: false,
        iconName: "eye-slash",
        color: "#d6d6d6",
      });
    }
  }

  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }

  render() {
    return (
      <View
        key={this.props.keyval}
        style={{
          backgroundColor: "#f7f6f6",
          height: 60,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 0.9, flexDirection: "column", margin: 5 }}>
          <Text
            style={{
              color: "#35424a",
              fontFamily: "Asap",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            {this.props.val.note}
          </Text>
          <TouchableOpacity onPress={this.props.deleteMethod}>
            <Text
              style={{
                color: "#35424a",
                fontFamily: "Asap",
                fontWeight: "400",
                fontSize: 14,
                marginTop: 5,
              }}
            >
              {this.props.val.note}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.3 }}>
          <SmallGraph></SmallGraph>
        </View>
        <View style={{ flex: 0.9, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text
              style={{
                flex: 1,
                margin: 5,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              123321
            </Text>
            <Text style={data >= 0 ? styles.green : styles.red}>{data}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => this.changeColor()}
            >
              <FontAwesome5
                name={this.state.iconName}
                size={20}
                style={{ color: this.state.color }}
              />
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#ebebeb",
                  margin: 20,
                  marginBottom: 120,
                  marginTop: 100,
                  borderRadius: 9,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,
                  elevation: 3,
                }}
              >
                <View style={{ flex: 0.7, flexDirection: "row" }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      marginTop: 2,
                      marginLeft: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      {this.props.val.note}
                    </Text>
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: 15,
                      }}
                    >
                      {this.props.val.note}
                    </Text>
                  </View>
                  <View style={{ marginTop: 2, marginRight: 5 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <AntDesign name="close" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 0.4, justifyContent: "center" }}>
                  <Text
                    style={{
                      color: "#35424a",
                      fontFamily: "Asap",
                      fontWeight: "400",
                      fontSize: 17,
                      marginLeft: 5,
                    }}
                  >
                    {this.props.val.note} in Euro
                  </Text>
                </View>
                <View style={{ flex: 2.1, backgroundColor: "red" }}>
                  <PopupGraph></PopupGraph>
                </View>
                <View style={{ flex: 0.5, justifyContent: "center" }}>
                  <View
                    style={{
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
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "w"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("w")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "w"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        1W
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1.3,
                        borderColor: "#d6d6d6",
                        height: 32,
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "m"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("m")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "m"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        1M
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1.3,
                        borderColor: "#d6d6d6",
                        height: 32,
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "3m"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("3m")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "3m"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        3M
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1.3,
                        borderColor: "#d6d6d6",
                        height: 32,
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "6m"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("6m")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "6m"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        6M
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1.3,
                        borderColor: "#d6d6d6",
                        height: 32,
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "y"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("y")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "y"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        1Y
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1.3,
                        borderColor: "#d6d6d6",
                        height: 32,
                        borderRadius: 5,
                        padding: 0,
                        width: 30,
                        height: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          this.state.selectedButton === "max"
                            ? "#ffa834"
                            : "#ffffff",
                      }}
                      onPress={() => this.selectionOnPress("max")}
                    >
                      <Text
                        style={{
                          color:
                            this.state.selectedButton === "max"
                              ? "#ffffff"
                              : "#35424a",
                          fontSize: 10,
                          fontFamily: "Asap",
                          fontWeight: "400",
                        }}
                      >
                        M
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      marginLeft: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      Aktueller Kurs:
                    </Text>
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      Veränderung:
                    </Text>
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      Veränderung in %:
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      marginRight: 30,
                      marginBottom: 15,
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        color: "#35424a",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "400",
                      }}
                    >
                      {aktuell}
                    </Text>
                    <Text
                      style={veränderung >= 0 ? styles.green2 : styles.red2}
                    >
                      {veränderung}
                    </Text>
                    <Text
                      style={
                        veränderung_prozent >= 0 ? styles.green2 : styles.red2
                      }
                    >
                      {veränderung_prozent}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,                    
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#72bb53",
                      marginTop: 10,
                      marginLeft: 10,
                      marginRight: 5,
                      marginBottom: 10,
                      flex: 1,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Kaufen
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ff5d55",
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: 10,
                      marginBottom: 10,
                      flex: 1,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontFamily: "Asap",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Verkaufen
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="expand"
                size={22}
                style={{
                  transform: [{ rotate: "90deg" }],
                  color: "#35424a",
                }}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  green: {
    backgroundColor: "#72bb53",
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
    textAlign: "center",
    textAlignVertical: "center",
  },
  red: {
    backgroundColor: "#ff5d55",
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
    textAlign: "center",
    textAlignVertical: "center",
  },
  green2: {
    backgroundColor: "#72bb53",
    borderRadius: 3,
    textAlign: "center",
    textAlignVertical: "center",
    height: 22,
    width: 50,
    color: "#ffffff",
    fontFamily: "Asap",
    fontSize: 16,
    fontWeight: "400",
  },
  red2: {
    backgroundColor: "#ff5d55",
    borderRadius: 3,
    textAlign: "center",
    textAlignVertical: "center",
    height: 22,
    width: 50,
    color: "#ffffff",
    fontFamily: "Asap",
    fontSize: 16,
    fontWeight: "400",
  },
});
