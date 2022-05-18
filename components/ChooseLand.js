import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, {
  Defs,
  G,
  Image,
  Path,
  Pattern,
  Rect,
  Use,
} from "react-native-svg";
import Plant from "../assets/plant.svg";
import Pond from "../assets/pond.svg";
import Cafe from "../assets/cafe.svg";
import Bond from "../assets/bond.svg";

const ChooseLand = ({ onPress, currentLevel }) => (
  <View>
    {currentLevel == "1" && (
      <View style={styles.container}>
        <TouchableOpacity
          key="Plant"
          style={styles.stylePlant}
          onPress={() => onPress("Plant")}
        >
          <Plant style={{ top: 30, left: 35 }} />
        </TouchableOpacity>
        <Text style={styles.styleText}>OR</Text>
        <TouchableOpacity
          key="Pond"
          style={styles.stylePlant}
          onPress={() => onPress("Pond")}
        >
          <Pond style={{ top: 10, left: 12 }} />
        </TouchableOpacity>
      </View>
    )}
    {currentLevel == "2" && (
      <View style={styles.container2}>
        <TouchableOpacity
          key="Cafe"
          style={styles.styleCafe}
          onPress={() => onPress("Cafe")}
        >
          <View style={{ flexDirection: "row" }}>
            <Cafe style={{ top: 6, left: 5 }} />
            <Text
              style={{ left: 5, top: 20, position: "relative", width: 180 }}
            >
              Spend 100 coins now for a Starbucks Stock. Get this cafe and earn
              money change over a long period of time!
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.styleText}>OR</Text>
        <TouchableOpacity
          key="Bond"
          style={styles.styleBond}
          onPress={() => onPress("Bond")}
        >
          <View style={{ flexDirection: "row" }}>
            <Bond style={{ top: 6, left: 5 }} />
            <Text
              style={{ left: 15, top: 20, position: "relative", width: 180 }}
            >
              Spend 100 coins now for a Starbucks Stock. Get this cafe and earn
              money change over a long period of time!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container2: {
    flexDirection: "column",
    top: 70,
    left: 20,
  },
  styleBond: {
    position: "relative",
    width: 320,
    height: 118,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  styleCafe: {
    position: "relative",
    width: 320,
    height: 118,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flexDirection: "row",
    top: 70,
    left: 20,
  },
  styleText: {
    marginRight: 35,
    left: 16,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 27,
    top: 40,
  },
  stylePlant: {
    position: "relative",
    width: 128,
    height: 118,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
});

export default ChooseLand;
