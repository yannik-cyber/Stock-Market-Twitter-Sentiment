import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from "react-native";
import update from "immutability-helper";

import _ from "lodash";
import { LineChart } from "react-native-charts-wrapper";

const COLOR_PURPLE = processColor("#fcba03");

class SmallGraph extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      xAxis: {},
      yAxis: {},
    };
  }

  componentDidMount() {
    const valueRange = 100;
    const size = 30;

    this.setState(
      update(this.state, {        
        xAxis: {
          $set: {
            drawGridLines: false,
            enabled: false,
          },
        },
        yAxis: {
          $set: {
            left: {
              enabled: false,
              drawGridLines: true,
              drawAxisLine: false,
            },
            right: {
              enabled: false,
            },
          },
        },
        data: {
          $set: {
            dataSets: [
              {
                values: this._randomYValues(valueRange, size),
                label: "",
                config: {
                  lineWidth: 1.5,
                  drawCircles: false,
                  drawCubicIntensity: 0.3,
                  drawCubic: true,
                  drawHighlightIndicators: false,
                  color: COLOR_PURPLE,
                  drawFilled: false,                  
                  drawValues: false,                  
                },
              },
            ],            
          },
        },
      })
    );
  }

  _randomYValues(range: number, size: number) {
    const nextValueMaxDiff = 0.2;
    let lastValue = range / 2;

    return _.times(size, () => {
      let min = lastValue * (1 - nextValueMaxDiff);
      let max = lastValue * (1 + nextValueMaxDiff);
      return { y: Math.random() * (max - min) + min };
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            chartDescription={{ text: "" }}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            legend={{ enabled: false }}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: "#f7f6f6", 
        
  },
  chart: {    
      width: 140,
      height: 70,

  },
});

export default SmallGraph;
