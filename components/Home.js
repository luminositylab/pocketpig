import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import CongratsModal from "./modals/CongratsModal";
import AvatarImg from "../assets/avatar.svg";
import SettingImg from "../assets/setting.svg";
import HomePageImg from "../assets/home-page-image.svg";
import BadgeImg from "../assets/badge.svg";
import PigActiveImg from "../assets/pig-active.svg";
import StatsImg from "../assets/stats.svg";
import CubeImg from "../assets/cube.svg";

const Home = ({navigation}) => {

  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelInformation, setLevelInformation] = useState([
    {
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
    }
  ]);

  const today = new Date().toLocaleDateString();
  const modaldRef = useRef();
  const totalCoins = "30,453";

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <CongratsModal ref={modaldRef} />
      </View>

      <View style={styles.header}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>{today}</Text>
        <View style={styles.avatarSettings}>
          <View style={styles.avatar}>
            <AvatarImg width="48" height="48" />
          </View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => modaldRef.current.onPress()}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
          <SettingImg></SettingImg>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
          PocketPig
        </Text>
        <View style={styles.amountContainer}>
          <Image
            source={require("../assets/coin.png")}
            style={{ width: 22, height: 22, marginRight: 5 }}
          ></Image>
          <Text style={{ fontSize: 18, paddingBottom: 2 }}>{totalCoins}</Text>
        </View>
        <HomePageImg
          width="388"
          height="388"
          style={styles.homeImage}
        ></HomePageImg>
        <View style={styles.cubeContainer}>
          <CubeImg></CubeImg>
        </View>
      </View>

      <View style={styles.footerTab}>
        <BadgeImg></BadgeImg>
        <PigActiveImg></PigActiveImg>
        <StatsImg onPress = {()=> {navigation.navigate({name: 'RenderLevelMap', params: {currentLevel: currentLevel, levelInformation: levelInformation}})}}></StatsImg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  header: {
    width: 303,
    textAlign: "center",
  },
  avatarSettings: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  imageContainer: {
    position: "relative",
  },
  amountContainer: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  homeImage: {
    marginBottom: 50,
  },
  cubeContainer: {
    position: "absolute",
    backgroundColor: "#E8EBE9",
    padding: 10,
    borderRadius: 50,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    bottom: 100,
    right: 30,
  },
  footerTab: {
    width: 335,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#EDF0EF",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    shadowColor: "lightgray",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
  },
});

export default Home;
