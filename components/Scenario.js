import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import Header from "./Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChooseLand from "./ChooseLand";
import LevelCompleteModal from "./modals/LevelCompleteModal";

const Scenario = ({ navigation, route }) => {
  const modaldRef = useRef();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [land, setLand] = useState("");
  const [isClaimed, setIsCalimed] = useState(false);
  const [totalLand, setTotalLand] = useState([]);
  const [levelCompleteBonus, setlevelCompleteBonus] = useState(100);
  const [landCost, setLandCost] = useState(100);
  const [coins, setCoins] = useState(route.params["coins"]);

  const handleClaim = (val) => {
    setIsCalimed(true);
    navigation.navigate({
      name: "SavingsDashboard",
      params: {
        currentLevel: route.params["currentLevel"],
        levelInformation: route.params["levelInformation"],
        totalLand: totalLand,
        coins: coins + levelCompleteBonus,
      },
    });
  };

  const onPress = (p) => {
    setLand(p);
    modaldRef.current.onPress();
    let localLand = route.params["landOwned"];
    localLand.push(p);
    setTotalLand(localLand);
    if (route.params["currentLevel"] == "2")
      setCoins((coins) => coins - landCost);
  };

  return (
    <ScrollView>
      <View>
        <View>
          <LevelCompleteModal
            ref={modaldRef}
            land={land}
            handleClaim={handleClaim}
            level={route.params["currentLevel"]}
          />
        </View>
        <Header
          level={
            route.params["levelInformation"][route.params["currentLevel"] - 1][
              "level"
            ]
          }
          chapterTitle={
            route.params["levelInformation"][route.params["currentLevel"] - 1][
              "title"
            ]
          }
          chapterLine={
            route.params["levelInformation"][route.params["currentLevel"] - 1][
              "chapterLine"
            ]
          }
        />
        <View style={styles.container}>
          <View style={styles.inRow}>
            <Svg
              width={52}
              height={52}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Circle
                cx={26}
                cy={26}
                r={23}
                fill="#EDF0EF"
                stroke="#D0CECE"
                strokeWidth={6}
              />
              <Path
                d="M16.47 33.1v-4.14l9.48-13.56h5.73v13.26h2.46v4.44h-2.46V37h-5.13v-3.9H16.47Zm10.44-12.06-5.04 7.62h5.04v-7.62Z"
                fill="#000"
              />
            </Svg>

            {route.params["currentLevel"] != "2" && (
              <View style={styles.styleTitle}>
                <Text style={styles.styleLearning}>
                  Congrats! You are now a saving expert!
                </Text>
              </View>
            )}
            {route.params["currentLevel"] == "2" && (
              <View style={styles.styleTitle}>
                <Text style={styles.styleLearning}>
                  Congrats! You’re on your way to becoming an investing star.
                  Time to put your new knowledge to the test and watch your
                  money grow over time!
                </Text>
              </View>
            )}
          </View>
          {route.params["currentLevel"] != "2" && (
            <Text style={styles.stylePara}>
              Would you like to spend your rewards now to earn the plant for
              your land or save to get a bigger reward like the pond next level?
            </Text>
          )}
          {route.params["currentLevel"] == "2" && (
            <Text style={styles.stylePara}>
              Use your earned rewards to invest in either a Stock or a Bond.
              Pick your choice and watch your investment grow on your land over
              time!
            </Text>
          )}
          <View style={{ marginBottom: 200 }}>
            <ChooseLand
              currentLevel={route.params["currentLevel"]}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Scenario;

const styles = StyleSheet.create({
  container: {
    top: 50,
    marginLeft: wp("5%"),
    // marginTop: 30,
  },
  styleTitle: {},
  stylePara: {
    position: "relative",
    width: 272,
    top: 40,
    left: 65,
    height: 171,
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
  },
  styleLearning: {
    position: "relative",
    width: 272,
    height: 172,
    marginLeft: 12,
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
  },
  inRow: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
    flexDirection: "row",
  },
});
