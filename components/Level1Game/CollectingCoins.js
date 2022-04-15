import React, { useState, useEffect, PureComponent} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import Draggable from 'react-native-draggable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GameMap from './../../assets/GameMap.svg';
import PigContainer from './../../assets/PigContainer.svg';
import { GameEngine } from "react-native-game-engine";
import Platform from './Platform';
import Pig from './Pig';
import Coin from './Coin';
import Matter from "matter-js";

const BALL_SIZE = 10;
const PLANK_HEIGHT = 100;
const PLANK_WIDTH = 100
const BORDER = 15;

const pigSettings = {
  isStatic: true
};
const coinSettings = {
  inertia: 10,
  friction: 0,
  frictionStatic: 0,
  frictionAir: 0,
  restitution: 1
};

const wallSettings = {
  isStatic: true
};

const coin1 = Matter.Bodies.circle(
  wp('85%'),
  hp('50%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin1"
  }
);
const coin2 = Matter.Bodies.circle(
  wp('15%'),
  hp('30%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin2"
  }
);
const coin3 = Matter.Bodies.circle(
  wp('15%'),
  hp('5%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin3"
  }
);
const coin4 = Matter.Bodies.circle(
  wp('85%'),
  hp('10%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin4"
  }
);

const pig = Matter.Bodies.rectangle(
  BORDER,
  hp('85%'),
  PLANK_WIDTH,
  PLANK_HEIGHT,
  {
    ...pigSettings,
    label: "pig"
  }
);

const topWall = Matter.Bodies.rectangle(
  wp('15%'),
  hp('15%'),
  100,
  1,
  { ...wallSettings, label: "topWall" }
);
const bottomWall = Matter.Bodies.rectangle(
  wp('80%'),
  hp('30%'),
  100,
  1,
  { ...wallSettings, label: "bottomWall" }
);

const leftWall = Matter.Bodies.rectangle(wp('15%'), hp('45%'), 100, 10, {
  ...wallSettings,
  label: "leftWall"
});

const rightWall = Matter.Bodies.rectangle(
  wp('80%'),
  hp('60%'),
  100,
  1,
  { ...wallSettings, label: "rightWall" }
);

const WINNING_SCORE = 5;

const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;

Matter.World.add(world, [
  coin1,
  coin2,
  coin3,
  coin4,
  pig,
  topWall,
  bottomWall,
  leftWall,
  rightWall
]);

export default class CollectingCoins extends PureComponent {
  static navigationOptions = {
    header: null
  };

  state = {
    myScore: 0,
  };

  constructor(props) {
    super(props);

    this.myPig = pig
    this.wall1 = topWall
    this.wall2 = bottomWall
    this.wall3 = rightWall
    this.wall4 = leftWall

    this.physics = (entities, { time }) => {
      let engine = entities["physics"].engine;
      engine.world.gravity.y = 0.2;
      Matter.Engine.update(engine, time.delta);
      return entities;
    };

    this.movePig = (entities, { touches }) => {
      let move = touches.find(y => y.type === "move");
      if (move) {
        const newPosition = {
          x: this.myPig.position.x + move.delta.pageX,
          y: this.myPig.position.y 
        };
        Matter.Body.setPosition(this.myPig, newPosition);
      }

      return entities;
    };
  }
  
  componentDidMount() {

      Matter.Events.on(engine, "collisionStart", event => {
        var pairs = event.pairs;
        var objA = pairs[0].bodyA.label;
        var objB = pairs[0].bodyB.label;
        if (objB == 'pig') {
          
          this.setState(
            {
              myScore: +this.state.myScore + 1
            },
            () => {

              if(objA == 'coin1'){
                Matter.Body.setVelocity(coin1, { x: 10, y: 0 });
              }
              else if(objA == 'coin2'){
                Matter.Body.setVelocity(coin2, { x: 10, y: 0 });
              }
              else if(objA == 'coin3'){
                Matter.Body.setVelocity(coin3, { x: 10, y: 0 });
              }
              else if(objA == 'coin4'){
                Matter.Body.setVelocity(coin4, { x: 10, y: 0 });
              }
            }
          );
        }else if (objB == 'rightWall' || objB == 'bottomWall') {
            
            if(objA == 'coin1'){
              Matter.Body.setVelocity(coin1, { x: -1, y: 0 });
            }
            else if(objA == 'coin2'){
              Matter.Body.setVelocity(coin2, { x: -1, y: 0 });
            }
            else if(objA == 'coin3'){
              Matter.Body.setVelocity(coin3, { x: -1, y: 0 });
            }
            else if(objA == 'coin4'){
              Matter.Body.setVelocity(coin4, { x: -1, y: 0 });
            }
        }else if (objB == 'leftWall' || objB == 'topWall') {
            
          if(objA == 'coin1'){
            Matter.Body.setVelocity(coin1, { x: 1, y: 0 });
          }
          else if(objA == 'coin2'){
            Matter.Body.setVelocity(coin2, { x: 1, y: 0 });
          }
          else if(objA == 'coin3'){
            Matter.Body.setVelocity(coin3, { x: 1, y: 0 });
          }
          else if(objA == 'coin4'){
            Matter.Body.setVelocity(coin4, { x: 1, y: 0 });
          }
      }
      });
    
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[this.physics, this.movePig]}
        entities={{
          physics: {
            engine: engine,
            world: world
          },
          Coin1: {
            body: coin1,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: Coin
          },
          Coin2: {
            body: coin2,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: Coin
          },
          Coin3: {
            body: coin3,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: Coin
          },
          Coin4: {
            body: coin4,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: Coin
          },
          pig: {
            body: pig,
            size: [PLANK_WIDTH, PLANK_HEIGHT],
            renderer: Pig,
          },

          theCeiling: {
            body: topWall,
            renderer: Platform,
          },
          theFloor: {
            body: bottomWall,
            renderer: Platform,
          },
          theLeftWall: {
            body: leftWall,
            renderer: Platform,
          },
          theRightWall: {
            body: rightWall,
            renderer: Platform,
          }
        }}
      >
      <View >
        <Text style={{marginLeft: wp('50%'), marginTop: hp('10%')}}>
          {this.state.myScore}
        </Text>
      </View>
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  
});

