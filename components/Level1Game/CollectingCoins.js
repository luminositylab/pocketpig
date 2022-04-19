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
import FiftyCoin from './FiftyCoin';
import NegativeFiftyCoin from './NegativeFiftyCoin';
import TwentyFiveCoin from './TwentyFiveCoin';
import FiveCoin from './FIveCoin';
import { createNavigationContainerRef } from '@react-navigation/native';
export const navigation = createNavigationContainerRef()

const BALL_SIZE = 40;
const PLANK_HEIGHT = 10;
const PLANK_WIDTH = 50;

const pigSettings = {
  isStatic: true
};
const coinSettings = {
  inertia: 6,
  friction: 0,
  frictionStatic: 0,
  frictionAir: 0,
  restitution: 1
};

const wallSettings = {
  isStatic: true
};

const coin1 = Matter.Bodies.circle(
  wp('70%'),
  hp('50%'),
  40,
  {
    ...coinSettings,
    label: "coin1"
  }
);
const coin2 = Matter.Bodies.circle(
  wp('28%'),
  hp('40%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin2"
  }
);
const coin3 = Matter.Bodies.circle(
  wp('30%'),
  hp('10%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin3"
  }
);
const coin4 = Matter.Bodies.circle(
  wp('75%'),
  hp('20%'),
  BALL_SIZE,
  {
    ...coinSettings,
    label: "coin4"
  }
);
const coin5 = Matter.Bodies.circle(
  wp('30%'),
  hp('50%'),
  20,
  {
    ...coinSettings,
    label: "coin5"
  }
);
const coin6 = Matter.Bodies.circle(
  wp('60%'),
  hp('30%'),
  20,
  {
    ...coinSettings,
    label: "coin6"
  }
);

const pig = Matter.Bodies.rectangle(
  wp('50'),
  hp('75%'),
  PLANK_WIDTH,
  PLANK_HEIGHT,
  {
    ...pigSettings,
    label: "pig"
  }
);

const topWall = Matter.Bodies.rectangle(
  wp('30%'),
  hp('20%'),
  100,
  1,
  { ...wallSettings, label: "topWall" }
);
const bottomWall = Matter.Bodies.rectangle(
  wp('65%'),
  hp('30%'),
  100,
  1,
  { ...wallSettings, label: "bottomWall" }
);

const leftWall = Matter.Bodies.rectangle(wp('30%'), hp('45%'), 100, 10, {
  ...wallSettings,
  label: "leftWall"
});

const rightWall = Matter.Bodies.rectangle(
  wp('72%'),
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
  coin5,
  coin6,
  pig,
  topWall,
  bottomWall,
  leftWall,
  rightWall
]);

export default class CollectingCoins extends PureComponent {

  state = {
    myScore: 0,
    firstHistory : 0,
    secondHistory : 0,
    thirdHistory : 0
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
      engine.world.gravity.y = 1;
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
      Matter.Sleeping.set(coin1, true);
      Matter.Sleeping.set(coin2, true);
      Matter.Sleeping.set(coin3, true);
      Matter.Sleeping.set(coin4, true);
      Matter.Sleeping.set(coin5, true);
      Matter.Sleeping.set(coin6, true);

      setTimeout(() => {Matter.Sleeping.set(coin1, false);}, 1000)
      setTimeout(() => {Matter.Sleeping.set(coin2, false);}, 2000)
      setTimeout(() => {Matter.Sleeping.set(coin3, false);}, 3000)
      setTimeout(() => {Matter.Sleeping.set(coin4, false);}, 4000)
      setTimeout(() => {Matter.Sleeping.set(coin5, false);}, 4000)
      setTimeout(() => {Matter.Sleeping.set(coin6, false);}, 4000)


      Matter.Events.on(engine, "collisionStart", event => {
        var pairs = event.pairs;
        var objA = pairs[0].bodyA.label;
        var objB = pairs[0].bodyB.label;
        if (objB == 'pig' && objA == 'coin1') {
          this.setState(
            {
              myScore: this.state.myScore + 0.5,
              firstHistory: 0.5,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory


            },
            () => {
                Matter.Body.setVelocity(coin1, { x: 10, y: -3 });
            }
          );
        }else if (objB == 'pig' && objA == 'coin2') {
          this.setState(
            {
              myScore: this.state.myScore + 0.25,
              firstHistory: 0.25,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory
            },
            () => {
                Matter.Body.setVelocity(coin2, { x: 10, y: -3 });
            }
          );
        }else if (objB == 'pig' && objA == 'coin3') {
          this.setState(
            {
              myScore: this.state.myScore + 0.05,
              firstHistory: 0.05,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory
            },
            () => {
                Matter.Body.setVelocity(coin3, { x: 10, y: -3 });
            }
          );
        }else if (objB == 'pig' && objA == 'coin4') {
          this.setState(
            {
              myScore: this.state.myScore + 0.05,
              firstHistory: 0.05,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory
            },
            () => {
                Matter.Body.setVelocity(coin4, { x: 10, y: -3 });
            }
          );
        }else if (objB == 'pig' && objA == 'coin5') {
          this.setState(
            {
              myScore: this.state.myScore - 0.5,
              firstHistory: -0.5,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory
            },
            () => {
                Matter.Body.setVelocity(coin5, { x: 10, y: -3 });
            }
          );
        }else if (objB == 'pig' && objA == 'coin6') {
          this.setState(
            {
              myScore: this.state.myScore - 0.5,
              firstHistory: - 0.5,
              secondHistory: this.state.firstHistory,
              thirdHistory: this.state.secondHistory
            },
            () => {
                Matter.Body.setVelocity(coin6, { x: 10, y: -3 });
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
            else if(objA == 'coin5'){
              Matter.Body.setVelocity(coin5, { x: -1, y: 0 });
            }
            else if(objA == 'coin6'){
              Matter.Body.setVelocity(coin6, { x: -1, y: 0 });
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
          else if(objA == 'coin5'){
            Matter.Body.setVelocity(coin5, { x: 1, y: 0 });
          }
          else if(objA == 'coin6'){
            Matter.Body.setVelocity(coin6, { x: 1, y: 0 });
          }
      }
      });
    
  }

  render() {
    return (
      <>
      <GameMap style ={{left: wp('7.25%'), bottom: hp('25%'), position: 'absolute'}}/>
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
            renderer: FiftyCoin
          },
          Coin2: {
            body: coin2,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: TwentyFiveCoin
          },
          Coin3: {
            body: coin3,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: FiveCoin
          },
          Coin4: {
            body: coin4,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: FiveCoin
          },
          Coin5: {
            body: coin5,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: NegativeFiftyCoin
          },
          Coin6: {
            body: coin6,
            size: [BALL_SIZE, BALL_SIZE],
            renderer: NegativeFiftyCoin
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
      
      </GameEngine>
      
      <View style={{alignItems: 'center'}}>
        <Text style={{marginBottom: hp('0%'), fontWeight: '800', fontSize: 20}}>
          ${this.state.myScore.toFixed(2)}
        </Text>
        <Text style={[{marginBottom: hp('0%'), fontWeight: '100', fontSize: 15}, this.state.firstHistory >=0 ? {color: '#3C885E'} : {color: '#FC8476'}]}>
          {this.state.firstHistory == 0 ? null : '$'+this.state.firstHistory.toFixed(2)}
        </Text>
        <Text style={[{marginBottom: hp('0%'), fontWeight: '100', fontSize: 15}, this.state.secondHistory >=0 ? {color: '#3C885E'} : {color: '#FC8476'}]}>
          {this.state.secondHistory == 0 ? null : '$'+this.state.secondHistory.toFixed(2)}
        </Text>
        <Text style={[{marginBottom: hp('7%'), fontWeight: '100', fontSize: 15}, this.state.thirdHistory >=0 ? {color: '#3C885E'} : {color: '#FC8476'}]}>
          {this.state.thirdHistory == 0 ? null : '$'+this.state.thirdHistory.toFixed(2)}
        </Text>
        <TouchableOpacity onPress={() => {
        if(this.state.myScore > 0.5){
          this.props.navigation.navigate('Scenario')
        }else{
          this.props.navigation.navigate('Greetings')
        }
      }}>
        <Text style={{alignSelf: 'center', marginBottom: hp('3%')}}>
          {this.state.myScore > 0.5 ? 'continue': 'go back'}
        </Text>
      </TouchableOpacity>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
});

