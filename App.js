import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RenderLevelMap from "./components/RenderLevelMap";
import Level1 from "./components/Level1";
import Home from "./components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectingCoins from "./components/Level1Game/CollectingCoins";

import LevelQuestions from "./components/LevelQuestions";
import Greetings from "./components/Greetings";
import Scenario from "./components/Scenario";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Pocket Pig is ready for development! :)</Text> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RenderLevelMap" component={RenderLevelMap} />
          <Stack.Screen name="Level1" component={Level1} />
          <Stack.Screen name="Level1Questions" component={LevelQuestions} />
          <Stack.Screen name="Greetings" component={Greetings} />
          <Stack.Screen name="Scenario" component={Scenario} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
});
