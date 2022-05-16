import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Header from './Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChooseLand from './ChooseLand';
import LevelCompleteModal from './modals/LevelCompleteModal';

const Scenario = ({
    navigation,
}) => {
    
    const modaldRef = useRef();

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    const [land, setLand] = useState("")
    
    const onPress = (p) => {
        setLand(p)
        modaldRef.current.onPress()
    }

    return(
        <View>
            <View>
                <LevelCompleteModal ref={modaldRef} land = {land}/>
            </View>
            <Header level = {"Level 1"} chapterTitle = {"Savings"} chapterLine = {"To save or not to save"}/>
            <View style = {styles.container}>
                <View style = {styles.inRow}>
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
                    
                    <View style = {styles.styleTitle}>
                        <Text style = {styles.styleLearning}>Congrats! You are now a saving expert!</Text>
                    </View>
                </View>
                <Text style = {styles.stylePara}>Would you like to spend your rewards now to earn the plant for your land or save to get a bigger reward like the pond next level?</Text>
                <View>
                    <ChooseLand onPress = {onPress}/>
                </View>
            </View>
        </View>
    )
};

export default Scenario;

const styles = StyleSheet.create({
    container: {
        top: 50,
        marginLeft: wp('5%'),
        // marginTop: 30,
    },
    stylePara: {
        position: 'relative',
        width: 272,
        top: 40,
        left: 65,
        height: 171,
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
    },
    styleLearning: {
        position: 'absolute',
        width: 272,
        height: 72,
        marginLeft: 12,
        // fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
    },
    inRow: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 27,
        flexDirection: 'row'
    },
})