import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import update from 'immutability-helper';

import _ from 'lodash';
import {LineChart} from 'react-native-charts-wrapper';

const COLOR_PURPLE = processColor('#fcba03');

class AxisLineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      xAxis: {},
      yAxis: {}
    };
  }

  componentDidMount() {
    const valueRange = 100;
    const size = 30;

    this.setState(
      update(this.state, {
        xAxis: {
          $set: {
            textColor: processColor('black'),
            textSize: 16,
            avoidFirstLastClipping: true,
            position: 'BOTTOM',
            drawGridLines: false
          }
        },
        yAxis: {
          $set: {
            left: {
              drawGridLines: true,
              drawAxisLine: false,
            },
            right: {
              enabled: false
            }
          }
        },
        data: {
          $set: {
            dataSets: [{
              values: this._randomYValues(valueRange, size),
              label: '',
              config: {
                lineWidth: 1.5,
                drawCircles: false,
                drawCubicIntensity: 0.3,
                drawCubic: true,
                drawHighlightIndicators: false,
                color: COLOR_PURPLE,
                drawFilled: true,
                fillColor: COLOR_PURPLE,
                fillAlpha: 90,
                drawValues: false
              }
            }],
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    const nextValueMaxDiff = 0.2;
    let lastValue = range / 2;

    return _.times(size, () => {
      let min = lastValue * (1 - nextValueMaxDiff);
      let max = lastValue * (1 + nextValueMaxDiff);
      return {y: Math.random() * (max - min) + min};
    });
  }


  render() {
    return (

      <View style={{flex: 1}}>
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            chartDescription={{text: ''}}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            legend={{enabled: false}}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default AxisLineChartScreen;