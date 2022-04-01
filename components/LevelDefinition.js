import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NeuButton } from 'react-native-neu-element'
import SvgPiggy from './SvgPiggy';
import Header from './Header'
import SvgRenderTop from './SvgRenderTop';
import SvgRenderBottom from './SvgRenderBottom';



export default function LevelDefinition ({
    chapterTitle, navigation
}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
 
return (
    <View>
        <Header level = {"Level 1"} chapterTitle = {"Savings"} chapterLine = {"To save or not to save"}/>
        <SvgRenderTop/>
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
                    <Path d="M20.81 19.87V15.1h8.31V37h-5.34V19.87h-2.97Z" fill="#000" />
                </Svg>
                <View style = {styles.styleTitle}>
                    <Text style = {styles.styleLearning}>What is </Text>
                    <Text style = {styles.chapterTitle}>{chapterTitle}</Text>
                    <Text style = {styles.styleLearning}>?</Text>
                </View>
            </View>
            
            <Text style={styles.definition}>Saving is when you do not spend your money straight away, and instead <Text style = {styles.definitionColor}>save</Text> it so you can spend it on something even better later!</Text>
            
            <Text style={styles.definition}>Usually people put their savings in a bank account, to keep the money safe until they have enough to buy what they want.</Text>
            <SvgPiggy/>
            <View style = {styles.footerStyle}>
                <Text style = {styles.nextStep}>Ready to move on?</Text>
                <View style={{alignItems: 'center', marginTop: hp("2%")}}>
                    <NeuButton 
                        color="#eef2f9"
                        width={wp("65%")}
                        height={hp("8%")}
                        borderRadius={30}
                        onPress = {() => {navigation.navigate('Level1Questions')}}
                    >
                        <Text style = {styles.buttonText}>Got it!</Text>
                    </NeuButton>
                </View>
            </View>
        </View>
        <SvgRenderBottom/>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
        // marginTop: 30,
    },
    footerStyle: {
        marginTop: hp("1%")
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 33,

    },
    definitionColor: {
        color: '#3C885E'
    },
    nextStep: {
        color: '#BDBDBD',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        marginTop: hp("5%"),
        marginLeft: wp("17%"),
    },
    styleTitle: {
        marginTop: hp('1.5%'),
        marginLeft: wp("7%"),
        lineHeight: 36,
        flexDirection: 'row'  
    },
    styleLearning: {
        fontWeight: '400',
        fontSize: 24
    },
    chapterTitle: {
        color: '#3C885E',
        fontSize: 24
    },
    inRow: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 27,
        flexDirection: 'row'
    },
    definition: {
        marginTop: hp("2%"),
        marginLeft: wp("17%"),
        marginRight: 35,
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 27  
    }
})

