import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LevelMap from './../assets/LevelMap.svg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function RenderLevelMap({navigation, route}) {

  useEffect(() => {
    console.log(route.params["levelInformation"][route.params["currentLevel"]-1]["level"])

  }, [])

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
      onPress={() => {navigation.navigate({ name: 'LevelDefinition', params: {currentLevel: route.params["currentLevel"], levelInformation: route.params["levelInformation"]}} )}}
      />
      <TouchableOpacity style={{
        width: wp("27%"), 
        height: hp("11%"), 
        position: 'absolute',
        top: hp("48%"),
        left: wp("20%"),
        right: 0,
        bottom: 0,
    }}
    onPress={() => {console.log('button2')}}/>
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
