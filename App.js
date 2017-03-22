/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Line } from 'react-native-svg';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CIRCLE_SIZE = 200;
const RADIUS = CIRCLE_SIZE * 0.5;

function caculateDegree(pX: number, pY: number) {
  // 位置情况定义
  const right = pX >= 0;
  const left = pX < 0;
  const up = pY >= 0;
  const down = pY < 0;

  let deg = 0;

  // 右上圆
  if (right && up) {
    const tan = pX / pY;
    const atan = Math.atan(tan);
    deg = atan * (180 / Math.PI);
    console.log('11111');
  }

  // 右下圆
  if (right && down) {
    const tan = -pY / pX;
    const atan = Math.atan(tan);
    deg = (atan * (180 / Math.PI)) + 90;
    console.log('22222');
  }

  // 左下圆
  if (left && down) {
    const tan = pX / pY;
    const atan = Math.atan(tan);
    deg = (atan * (180 / Math.PI)) + 180;
    console.log('3333');
  }

  // 左上圆
  if (left && up) {
    const tan = pY / -pX;
    const atan = Math.atan(tan);
    deg = (atan * (180 / Math.PI)) + 270;
    console.log('44444');
  }

  return deg;
}


type Props = {
  color: string,
}


export default class App extends Component {
  static defaultProps = {
    color: 'rgb(255, 61, 96)',
  };

  constructor(props:Props) {
    super(props);
    this.hours = 0;
    this.oldDeg = 0;
    this.state = ({
      rotateH: 0,
      rotateM: 0,
      selectedMiniute: null,
    });
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        const pX = evt.nativeEvent.pageX - (width * 0.5);
        const pY = -(evt.nativeEvent.pageY - (height * 0.5));

        const deg = caculateDegree(pX, pY);
        console.log(`degree:${deg}`);
        //  this.setState({ rotateM: deg });
      },
      onPanResponderMove: (evt, gestureState) => {
        // 转换原点坐标为当前圆
        const pX = evt.nativeEvent.pageX - (width * 0.5);
        const pY = -(evt.nativeEvent.pageY - (height * 0.5));

        const deg = caculateDegree(pX, pY);
        console.log(`degree:${deg}`);

        if (deg >= deg - 15 && deg <= deg + 15) {
          this.setState({ selectedMiniute: true });
        }

        if ((deg >= 0 && deg < 100) && (this.oldDeg > 260 && this.oldDeg <= 360)) {
          if (deg - this.oldDeg < 0) {
            this.hours += 1;
          }
        }

        if ((this.oldDeg >= 0 && this.oldDeg < 100) && (deg > 260 && deg <= 360)) {
          if (this.oldDeg - deg < 0) {
            this.hours -= 1;
          }
        }


        this.oldDeg = deg;
        if (this.state.selectedMiniute === true) {
          this.setState({ rotateM: deg });
        }
        if (this.state.selectedMiniute === false) {
          this.setState({ rotateH: deg });
        }

        //  this.setState({ rotateM: deg, rotateH: (deg / 12) + (this.hours * 30) });
      },
      onPanResponderRelease: (e, gestureState) => {
        this.setState({ selectedMiniute: null });
      },
      onPanResponderTerminate: (e, gestureState) => {

      },
    });
  }


  render() {
    const { container, circle } = styles;
    const hourDegree = Array.from({ length: 12 }, (v, k) => k * 30);
    const minuteDegree = Array.from({ length: 60 }, (v, k) => k * 6);
    return (
      <View
        style={container}
      >


        <View
          style={circle}
          {...this._panResponder.panHandlers}
        >


          <View style={{ position: 'absolute' }}>
            <Svg
              height={CIRCLE_SIZE}
              width={CIRCLE_SIZE}
            >

              {minuteDegree.map((degree) => {
                return (<Line
                  key={degree}
                  x1={RADIUS}
                  y1="0"
                  x2={RADIUS}
                  y2="8"
                  stroke={this.props.color}
                  strokeWidth="1"
                  rotate={degree}
                  origin={`${RADIUS}, ${RADIUS}`}
                />);
              })}


              {hourDegree.map((degree) => {
                return (
                  <Line
                    key={degree}
                    x1={RADIUS}
                    y1="0"
                    x2={RADIUS}
                    y2="12"
                    stroke={this.props.color}
                    strokeWidth="2"
                    rotate={degree}
                    origin={`${RADIUS}, ${RADIUS}`}
                  />
                );
              })}
            </Svg>
          </View>

          <Svg
            height={CIRCLE_SIZE}
            width={CIRCLE_SIZE}
          >

            <Line
              x1={RADIUS}
              y1={RADIUS * 0.3}
              x2={RADIUS}
              y2={RADIUS}
              stroke={this.props.color}
              strokeWidth="3"
              rotate={this.state.rotateH}
              origin={`${RADIUS}, ${RADIUS}`}
              onPress={() => {
                console.log('selectedHour---');
                this.setState({ selectedMiniute: false });
              }}
            />
            <Line
              x1={RADIUS}
              y1={0}
              x2={RADIUS}
              y2={RADIUS}
              stroke={this.props.color}
              strokeWidth="2"
              rotate={this.state.rotateM}
              origin={`${RADIUS}, ${RADIUS}`}
              onPress={() => {
                console.log('---selectedMiniute');
                this.setState({ selectedMiniute: true });
              }}
            />
          </Svg>

          {hourDegree.map((degree, index) => {
            const left = RADIUS + Math.sin(degree / 180 * Math.PI) * RADIUS * 0.8 - 14;
            const top = RADIUS - Math.cos(degree / 180 * Math.PI) * RADIUS * 0.8 - 10;
            const hour = index === 0 ? 12 : index;
            const fontSize = index % 3 === 0 ? 16 : 12;
            return (
              <View
                key={degree}
                style={{
                  position: 'absolute',
                  left,
                  top,
                  width: 30,
                  height: 20,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize, backgroundColor: 'transparent', color: this.props.color }}>{hour}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'gray',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: RADIUS,
    //  backgroundColor: 'lightgray',
  },

});
