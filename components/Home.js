import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable} from "react-native";
import { AVATAR } from "../assets";
import React, { useRef, useState } from "react";
import CongratsModal from "./modals/CongratsModal";
import AvatarImg from "../assets/avatar.svg";
import SettingImg from "../assets/setting.svg";
import HomePageImg from "../assets/home-page-image.svg";
import BadgeImg from "../assets/badge.svg";
import PigActiveImg from "../assets/pig-active.svg";
import StatsImg from "../assets/stats.svg";
import CubeImg from "../assets/cube.svg";

const Home = ({navigation}) => {

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

        <TouchableOpacity onPress={() => {navigation.navigate('RenderLevelMap')}}>  
          <Image
            source={require("../assets/game.png")}
            style={{ width: 50, height: 40 }}
          ></Image>
        </TouchableOpacity>
        <Image
          source={require("../assets/pig.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
        <Image
          source={require("../assets/chart.png")}
          style={{ width: 40, height: 40 }}
        ></Image>

        <BadgeImg></BadgeImg>
        <PigActiveImg></PigActiveImg>
        <StatsImg onPress = {()=> {navigation.navigate('RenderLevelMap')}}></StatsImg>

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
