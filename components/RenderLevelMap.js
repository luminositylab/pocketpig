import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LevelMap from "./../assets/LevelMap.svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function RenderLevelMap({ navigation, route }) {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [landOwned, setLandOwned] = useState([]);
  const [coins, setCoins] = useState(0);
  const [levelInformation, setLevelInformation] = useState([
    {
      levelNo: 1,
      level: "Level 1",
      chapterLine: "To save or not to save",
      title: "savings",
      definitionQuestion: "What is saving ?",
      definition1:
        "Saving is when you do not spend your money straight away, and instead save it so you can spend it on something even better later!",
      definition2:
        "Usually people put their savings in a bank account, to keep the money safe until they have enough to buy what they want.",
      buttonText: "Got it!",
      isReady: "Ready to move on?",
      greetings: {
        greetingHeader: "Wow, great work!",
        greetingPara1: "You are really getting the hag of this.",
        greetingPara2:
          "You have unlocked a mini game, go ahead and try it out to earn some rewards!",
      },
      mcq: [
        {
          question: "So, What is saving?",
          answerOptions: [
            {
              key: "key1",
              text: "Using your money to buy goods and services",
              ans: "wrong",
            },
            {
              key: "key2",
              text: "Putting your money away so you can spend it later",
              ans: "right",
            },
            {
              key: "key3",
              text: "Finding a $5 bill while going to school",
              ans: "wrong",
            },
          ],
        },
        {
          question: "Why is savings important?",
          answerOptions: [
            {
              key: "key1",
              text: "I don't want to save as it is not important to save",
              ans: "wrong",
            },
            {
              key: "key2",
              text: "So you can have money for future purchases or emergencies",
              ans: "right",
            },
            {
              key: "key3",
              text: "So you can have more money in your bank account",
              ans: "wrong",
            },
          ],
        },
        {
          question: "What is correct example of saving?",
          answerOptions: [
            {
              key: "key1",
              text: "Spending all your allowance right away",
              ans: "wrong",
            },
            {
              key: "key2",
              text: "Putting aside some of your allowance over time",
              ans: "wrong",
            },
            {
              key: "key3",
              text: "Giving some of your allowance to your friends",
              ans: "right",
            },
          ],
        },
      ],
    },
    {
      levelNo: 2,
      level: "Level 2",
      chapterLine: "To invest or to save",
      title: "Investing",
      definitionQuestion: "What is investing ?",
      definition1:
        "Investing is an action you take with your money to make it grow! You can invest your money in many things, such as stocks and bonds.",
      definition2:
        "You can put some money into a Stock, which is a small part of a company. As the company grows, so does your Stock and the money you used to invest in it! ",
      buttonText: "Got it!",
      isReady: "Ready to move on?",
      greetings: {
        greetingHeader: "Wow, great work!",
        greetingPara1: "You are really getting the hag of this.",
        greetingPara2:
          "You have unlocked a mini game, go ahead and try it out to earn some rewards!",
      },
      mcq: [
        {
          question: "Which of these is a correct example of investing?",
          answerOptions: [
            {
              key: "key1",
              text: "Putting some of your  money into a Stock of a company of your choosing",
              ans: "wrong",
            },
            {
              key: "key2",
              text: "Putting some of your money into a bond ",
              ans: "wrong",
            },
            {
              key: "key3",
              text: "All of the above",
              ans: "right",
            },
          ],
        },
        {
          question: "Why is investing in stocks and/or bonds important?",
          answerOptions: [
            {
              key: "key1",
              text: "It allows you to sacrifice a little of your money in order to grow more over time",
              ans: "right",
            },
            {
              key: "key2",
              text: "It is not important",
              ans: "wrong",
            },
            {
              key: "key3",
              text: "It gets you more money right away",
              ans: "wrong",
            },
          ],
        },
        {
          question: "What is correct example of Investing?",
          answerOptions: [
            {
              key: "key1",
              text: "Putting your money into a savings account",
              ans: "wrong",
            },
            {
              key: "key2",
              text: "Saving your money to spend on toys",
              ans: "wrong",
            },
            {
              key: "key3",
              text: "Using some money to buy a Stock in a company",
              ans: "right",
            },
          ],
        },
      ],
    },
  ]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (route.params) {
      if (route.params["land"]) {
        let localLand = landOwned;
        localLand.push(route.params["land"]);
        setLandOwned(localLand);
      }
      if (route.params["coins"]) setCoins(route.params["coins"]);
      // setLandOwned((landOwned) => [. ..landOwned, route.params["land"]]);
    }
    // setLandOwned
  });

  return (
    <View style={styles.container}>
      <LevelMap
        style={{
          position: "absolute",
          top: hp("15%"),
          left: wp("12%"),
          right: 0,
          bottom: 0,
        }}
      />
      <TouchableOpacity
        style={{
          width: wp("27%"),
          height: hp("11%"),
          position: "absolute",
          top: hp("27%"),
          left: wp("47%"),
          right: 0,
          bottom: 0,
        }}
        onPress={() =>
          navigation.navigate({
            name: "LevelDefinition",
            params: {
              currentLevel: 1,
              levelInformation: levelInformation,
              landOwned: landOwned,
              coins: coins,
            },
          })
        }
      />
      {/* {route.params["currentLevel"] == 1 && <Text style={{marginLeft: 40, position: 'absolute',}}>You are here!</Text>} */}
      <TouchableOpacity
        style={{
          width: wp("27%"),
          height: hp("11%"),
          position: "absolute",
          top: hp("48%"),
          left: wp("20%"),
          right: 0,
          bottom: 0,
        }}
        onPress={() =>
          navigation.navigate({
            name: "LevelDefinition",
            params: {
              currentLevel: 2,
              levelInformation: levelInformation,
              landOwned: landOwned,
              coins: coins,
            },
          })
        }
      />
      <TouchableOpacity
        style={{
          width: wp("27%"),
          height: hp("11%"),
          position: "absolute",
          top: hp("68%"),
          left: wp("12%"),
          right: 0,
          bottom: 0,
        }}
        onPress={() => {
          console.log("button3");
        }}
      />
      {/*<Text>Pocket Pig is ready for development! :)</Text>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
