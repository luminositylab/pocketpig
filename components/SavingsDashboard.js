import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import PlantSVG from '../assets/plant.svg'
import PondSVG from '../assets/pond.svg'
import CoinSVG from '../assets/coin.svg'

const SavingsDashboard = ({
    navigation, route,
}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    const onPress = () => {
        console.log("Pressable clicked");
        navigation.navigate({ name: 'RenderLevelMap', params: {currentLevel: route.params["currentLevel"], levelInformation: route.params["levelInformation"]}})
    }

    return(
        <View style={{display: 'flex'}}>
            <Header level = {route.params["levelInformation"][route.params["currentLevel"]-1]["level"] + " completed"} chapterTitle = {"Micki's Savings"} chapterLine = {"Lands and Coins Earned"}/>
            <View>
                <Text style={{marginTop: 20, marginBottom: 20, fontWeight: '700', alignSelf: 'center'}}>Lands Owned</Text>
            {
                route.params["land"] == "Plant" && <PlantSVG style = {{alignSelf: 'center'}}/>
            }
            {
                route.params["land"] == "Pond" && <PondSVG style = {{alignSelf: 'center'}}/>
            }
            </View>
            <View style = {{display: 'flex'}}>
               <Text style={{marginTop: 20, marginBottom: 20, fontWeight: '700', alignSelf: 'center'}}> Total Coins Earned </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <CoinSVG />
                    <Text style={{marginBottom: 20, fontWeight: '700'}}>  1504  </Text>
                </View>
            </View>
            <View style={{display: 'flex'}}>
                <Pressable
                    onPress={onPress}
                    style={styles.goButton}
                    >
                    <Text style={{ fontWeight: "700" }}>Let's go to level Map!</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    goButton: {
        top: 120,
        alignSelf: 'center',
        alignItems: 'center',
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
