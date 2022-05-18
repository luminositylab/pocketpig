import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NeuButton } from "react-native-neu-element";
import SvgPiggy from "./SvgPiggy";
import Header from "./Header";
import SvgRenderTop from "./SvgRenderTop";
import SvgRenderBottom from "./SvgRenderBottom";
import One from "../assets/oneNo.svg";
import Risk from "../assets/risk.svg";
import Safe from "../assets/safe.svg";
import LongTerm from "../assets/longterm.svg";
import ShortTerm from "../assets/shortterm.svg";

export default function LevelDefinition({ navigation, route }) {
  useEffect(() => {
    console.log(route.params["currentLevel"]);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView>
      <View>
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
        <SvgRenderTop />
        <View style={styles.container}>
          <View style={styles.inRow}>
            <One />
            <View style={styles.styleTitle}>
              <Text style={styles.styleLearning}>
                {
                  route.params["levelInformation"][
                    route.params["currentLevel"] - 1
                  ]["definitionQuestion"]
                }
              </Text>
            </View>
          </View>

          <Text style={styles.definition}>
            {
              route.params["levelInformation"][
                route.params["currentLevel"] - 1
              ]["definition1"]
            }
          </Text>

          <Text style={styles.definition}>
            {
              route.params["levelInformation"][
                route.params["currentLevel"] - 1
              ]["definition2"]
            }
          </Text>
          {route.params["currentLevel"] == "2" && (
            <View style={{ display: "flex", marginTop: 10 }}>
              <Text
                style={{ alignSelf: "center", fontWeight: "700", fontSize: 18 }}
              >
                <Text style={{ color: "#3C885E" }}> Stocks </Text> versus{" "}
                <Text style={{ color: "#3C885E" }}> Bonds </Text>
              </Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  marginLeft: 50,
                }}
              >
                <View style={{ maxWidth: 150, marginRight: 15 }}>
                  <Risk width={64} height={64} />
                  <Text style={{ color: "#61635E" }}>
                    higher risk, but higher potential return on your money used
                    to invest
                  </Text>
                </View>
                <View style={{ maxWidth: 150 }}>
                  <Safe width={64} height={64} />
                  <Text style={{ color: "#61635E" }}>
                    lower risk, but lower potential return on your money used to
                    invest
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  marginLeft: 50,
                }}
              >
                <View style={{ maxWidth: 150, marginRight: 15 }}>
                  <LongTerm width={64} height={64} />
                  <Text style={{ color: "#61635E" }}>
                    long-term growth, meaning your money grows over longer
                    periods of time
                  </Text>
                </View>
                <View style={{ maxWidth: 150 }}>
                  <ShortTerm width={64} height={64} />
                  <Text style={{ color: "#61635E" }}>
                    short-term growth, meaning your money grows over shorter
                    periods of time and is more stable
                  </Text>
                </View>
              </View>
            </View>
          )}
          {/* <SvgPiggy /> */}
          <View style={styles.footerStyle}>
            <Text style={styles.nextStep}>
              {
                route.params["levelInformation"][
                  route.params["currentLevel"] - 1
                ]["isReady"]
              }
            </Text>

            <SvgRenderBottom />
            <View
              style={{
                alignItems: "center",
                // marginTop: hp("2%"),
                marginBottom: 40,
              }}
            >
              <NeuButton
                color="#eef2f9"
                width={wp("65%")}
                height={hp("8%")}
                borderRadius={30}
                onPress={() => {
                  navigation.navigate({
                    name: "LevelQuestions",
                    params: {
                      currentLevel: route.params["currentLevel"],
                      levelInformation: route.params["levelInformation"],
                      landOwned: route.params["landOwned"],
                      coins: route.params["coins"],
                    },
                  });
                }}
              >
                <Text style={styles.buttonText}>
                  {
                    route.params["levelInformation"][
                      route.params["currentLevel"] - 1
                    ]["buttonText"]
                  }
                </Text>
              </NeuButton>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    // marginTop: 30,
  },
  footerStyle: {
    marginTop: hp("1%"),
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 33,
  },
  definitionColor: {
    color: "#3C885E",
  },
  nextStep: {
    color: "#BDBDBD",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    marginTop: hp("5%"),
    marginLeft: wp("17%"),
  },
  styleTitle: {
    marginTop: hp("1.5%"),
    marginLeft: wp("7%"),
    lineHeight: 36,
    flexDirection: "row",
  },
  styleLearning: {
    fontWeight: "400",
    fontSize: 24,
  },
  chapterTitle: {
    color: "#3C885E",
    fontSize: 24,
  },
  inRow: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
    flexDirection: "row",
  },
  definition: {
    marginTop: hp("2%"),
    marginLeft: wp("17%"),
    marginRight: 35,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 27,
  },
});
