import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import PlantSVG from "../assets/plant.svg";
import PondSVG from "../assets/pond.svg";
import CoinSVG from "../assets/coin.svg";
import Cafe from "../assets/cafe.svg";
import Bond from "../assets/bond.svg";

const SavingsDashboard = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const onPress = () => {
    console.log("Pressable clicked");
    navigation.navigate({
      name: "RenderLevelMap",
      params: {
        currentLevel: route.params["currentLevel"],
        levelInformation: route.params["levelInformation"],
        land: route.params["land"],
        coins: route.params["coins"],
      },
    });
  };

  useEffect(() => {
    console.log(route.params["totalLand"]);
  }, []);

  return (
    <View style={{ display: "flex" }}>
      <Header
        level={
          route.params["levelInformation"][route.params["currentLevel"] - 1][
            "level"
          ] + " completed"
        }
        chapterTitle={"Micki's Savings"}
        chapterLine={"Lands and Coins Earned"}
      />
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Lands Owned
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          {route.params["totalLand"].map((land, index) => {
            if (land == "Plant") {
              return (
                <PlantSVG
                  width={80}
                  height={80}
                  key={index}
                  style={{ alignSelf: "center" }}
                />
              );
            } else if (land == "Pond") {
              return (
                <PondSVG
                  width={80}
                  height={80}
                  key={index}
                  style={{ alignSelf: "center" }}
                />
              );
            } else if (land == "Cafe") {
              return (
                <Cafe
                  width={80}
                  height={80}
                  key={index}
                  style={{ alignSelf: "center" }}
                />
              );
            } else if (land == "Bond") {
              return (
                <Bond
                  width={80}
                  height={80}
                  key={index}
                  style={{ alignSelf: "center" }}
                />
              );
            }
          })}
        </View>
      </View>
      <View style={{ display: "flex" }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          {" "}
          Total Coins Earned{" "}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CoinSVG />
          <Text style={{ marginBottom: 20, fontWeight: "700" }}>
            {" "}
            {route.params["coins"].toFixed(2)}{" "}
          </Text>
        </View>
      </View>
      <View style={{ display: "flex" }}>
        <Pressable onPress={onPress} style={styles.goButton}>
          <Text style={{ fontWeight: "700" }}>Let's go to level Map!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  styleLand: {
    position: "relative",
    width: 20,
    height: 118,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  goButton: {
    top: 120,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBEDEC",
    width: 268,
    height: 58,
    borderRadius: 30,
    position: "relative",
    shadowOffset: { height: 3, width: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});

export default SavingsDashboard;
