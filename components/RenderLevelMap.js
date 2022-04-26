import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LevelMap from './../assets/LevelMap.svg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function RenderLevelMap({navigation, route}) {

  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelInformation, setLevelInformation] = useState([
    {
      levelNo: 1,
      level: "Level 1",
      chapterLine:"To save or not to save",
      title: 'savings',
      definitionQuestion: "What is saving ?",
      definition1: "Saving is when you do not spend your money straight away, and instead save it so you can spend it on something even better later!",
      definition2: "Usually people put their savings in a bank account, to keep the money safe until they have enough to buy what they want.",
      buttonText: "Got it!",
      isReady: "Ready to move on?",
      greetings: {
          greetingHeader: "Wow, great work!",
          greetingPara1: "You are really getting the hag of this.",
          greetingPara2: "You have unlocked a mini game, go ahead and try it out to earn some rewards!"
      },
      mcq: [

        {
            question: 'So, What is saving?',
            answerOptions: [
                {
                    key: 'key1',
                    text: 'Using your money to buy goods and services',
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'Putting your money away so you can spend it later',
                    ans: 'right'
                },
                {
                    key: 'key3',
                    text: 'Finding a $5 bill while going to school',
                    ans: 'wrong'
                },
            ]
        },
        {
            question: 'Why is savings important?',
            answerOptions: [
                {
                    key: 'key1',
                    text: "I don't want to save as it is not important to save",
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'So you can have money for future purchases or emergencies',
                    ans: 'right'
                },
                {
                    key: 'key3',
                    text: 'So you can have more money in your bank account',
                    ans: 'wrong'
                },
            ]
        },
        {
            question: 'What is correct example of saving?',
            answerOptions: [
                {
                    key: 'key1',
                    text: 'Spending all your allowance right away',
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'Putting aside some of your allowance over time',
                    ans: 'wrong'
                },
                {
                    key: 'key3',
                    text: 'Giving some of your allowance to your friends',
                    ans: 'right'
                },
            ]
        }
    
      ]
    },
    {

      levelNo: 2,
      level: "Level 2",
      chapterLine:"To invest or to save",
      title: 'Investing',
      definitionQuestion: "What is investing ?",
      definition1: "Saving is when you do not spend your money straight away, and instead save it so you can spend it on something even better later!",
      definition2: "Usually people put their savings in a bank account, to keep the money safe until they have enough to buy what they want.",
      buttonText: "Got it!",
      isReady: "Ready to move on?",
      greetings: {
          greetingHeader: "Wow, great work!",
          greetingPara1: "You are really getting the hag of this.",
          greetingPara2: "You have unlocked a mini game, go ahead and try it out to earn some rewards!"
      },
      mcq: [

        {
            question: 'So, What is investing?',
            answerOptions: [
                {
                    key: 'key1',
                    text: 'Option 1',
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'Option 2',
                    ans: 'right'
                },
                {
                    key: 'key3',
                    text: 'Option 3',
                    ans: 'wrong'
                },
            ]
        },
        {
            question: 'Why is investing important?',
            answerOptions: [
                {
                    key: 'key1',
                    text: "Option 1",
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'Option 2',
                    ans: 'right'
                },
                {
                    key: 'key3',
                    text: 'Option 3',
                    ans: 'wrong'
                },
            ]
        },
        {
            question: 'What is correct example of Investing?',
            answerOptions: [
                {
                    key: 'key1',
                    text: 'Option 1',
                    ans: 'wrong'
                },
                {
                    key: 'key2',
                    text: 'Option 2',
                    ans: 'wrong'
                },
                {
                    key: 'key3',
                    text: 'Option 3',
                    ans: 'right'
                },
            ]
        }
      ]
    }
  ]);

  
  
  
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);


  return (
    <View style={styles.container}>
      <LevelMap style={{
        position: 'absolute',
        top: hp("15%"),
        left: wp("12%"),
        right: 0,
        bottom: 0,
      }}/>
      <TouchableOpacity style={{
        width: wp("27%"), 
        height: hp("11%"), 
        position: 'absolute',
        top: hp("27%"),
        left: wp("47%"),
        right: 0,
        bottom: 0,
      }}
      onPress={() => navigation.navigate({ name: 'LevelDefinition', params: {currentLevel: 1, levelInformation: levelInformation}} )}
      />
       {/* {route.params["currentLevel"] == 1 && <Text style={{marginLeft: 40, position: 'absolute',}}>You are here!</Text>} */}
      <TouchableOpacity style={{
        width: wp("27%"), 
        height: hp("11%"), 
        position: 'absolute',
        top: hp("48%"),
        left: wp("20%"),
        right: 0,
        bottom: 0,
    }}
    onPress={() => navigation.navigate({ name: 'LevelDefinition', params: {currentLevel:2, levelInformation: levelInformation}} )}/>
      <TouchableOpacity style={{
        width: wp("27%"), 
        height: hp("11%"), 
        position: 'absolute',
        top: hp("68%"),
        left: wp("12%"),
        right: 0,
        bottom: 0,
    }}
    onPress={() => {console.log('button3')}}/>
      {/*<Text>Pocket Pig is ready for development! :)</Text>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
