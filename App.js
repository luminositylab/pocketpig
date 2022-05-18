import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RenderLevelMap from "./components/RenderLevelMap";
import Home from "./components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectingCoins from "./components/Level1Game/CollectingCoins";
import LevelQuestions from "./components/LevelQuestions";
import Greetings from "./components/Greetings";
import Scenario from "./components/Scenario";
import LevelDefinition from "./components/LevelDefinition";
import SavingsDashboard from "./components/SavingsDashboard";

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <View style={styles.container}>
      {/* <Text>Pocket Pig is ready for development! :)</Text> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RenderLevelMap" component={RenderLevelMap} />
          <Stack.Screen name="LevelDefinition" component={LevelDefinition} />
          <Stack.Screen name="LevelQuestions" component={LevelQuestions} />
          <Stack.Screen name="Greetings" component={Greetings} />
          <Stack.Screen options={{headerShown: false}} name="CollectingCoins" component={CollectingCoins} />
          <Stack.Screen name="Scenario" component={Scenario} />
          <Stack.Screen name="SavingsDashboard" component={SavingsDashboard} />
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
