import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NeuButton } from 'react-native-neu-element'
import Header from './Header';
import Pig from '../assets/pig.svg'
import Three from '../assets/threeNo.svg'

const Greetings = ({
    navigation, route
}) => 
{
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return(
    <View>
        <Header level = {route.params["levelInformation"][route.params["currentLevel"]-1]["level"]} chapterTitle = {route.params["levelInformation"][route.params["currentLevel"]-1]["title"]} chapterLine = {route.params["levelInformation"][route.params["currentLevel"]-1]["chapterLine"]}/>
        <View style = {styles.container}>
            <View style = {styles.inRow}>
                <Three/>
                <View style = {styles.styleTitle}>
                    <Text style = {styles.styleHeading}>{route.params["levelInformation"][route.params["currentLevel"]-1]["greetings"]["greetingHeader"]}</Text>
                </View>
            </View>
        </View>
        <View style = {styles.inRow}>
            <Text style={styles.heading}>{route.params["levelInformation"][route.params["currentLevel"]-1]["greetings"]["greetingPara1"]}</Text>
            <Pig/>
        </View>
        <View style={{marginTop: hp('7%'), flexDirection: 'row', marginLeft: wp('20%'), marginRight: wp('8%')}}>
            <Text style={{flexWrap: 'wrap', flexShrink:1}}>
            <Text style={styles.styleText2}>{route.params["levelInformation"][route.params["currentLevel"]-1]["greetings"]["greetingPara2"]}</Text>
            {/* <Text style={styles.styleText2}>, go ahead and try it out to earn some rewards!</Text> */}
            </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: hp("2%")}}>
            <NeuButton 
                style={{marginTop: hp('10%'),}}
                color="#eef2f9"
                width={wp("65%")}
                height={hp("8%")}
                borderRadius={30}
                onPress = {()=> {navigation.navigate( { name: 'CollectingCoins', params: {currentLevel: route.params["currentLevel"], levelInformation: route.params["levelInformation"]}} )}}
            >
                <Text style = {styles.buttonText}>Let's go!</Text>
            </NeuButton>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    styleText1: {
        fontSize: 24,
        lineHeight: 36,
        color: "#3C885E",
        // flexWrap: 'wrap',
        // flexShrink:1,
    },
    styleText2: {
        fontSize: 24,
        lineHeight: 36,
    },
    styleSvg: {
        marginRight: wp('10%')
    },
    heading: {
        fontSize: 24, 
        lineHeight: 36,
        flexWrap: 'wrap',
        flexShrink:1,
        marginTop: hp('2%'),
        marginLeft: wp('20%'),
    },
    centered: {
        backgroundColor: '#E3E3E3', 
        borderRadius : 30, 
        marginLeft: wp('7.5%'),
        marginTop: hp('4%'),    
        width : wp('85%'), 
        height : hp('35%'),
    },
    styleQuestions: {
        // marginTop: hp('1%'),
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
    },
    container: {
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
        // marginTop: 30,
    },
    buttonText: { 
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 33,
        color: '#3B3C3C'

    },
    styleTitle: {
        // marginTop: hp('1.5%'),
        marginLeft: wp("7%"),
        lineHeight: 36,
        flexDirection: 'row'  
    },
    styleHeading: {
        color: '#3C885E',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        flexWrap: 'wrap',
        marginTop: hp('1%'),
        marginLeft: -wp('2%'),
        marginRight: wp('23%')
    },
    chapterTitle: {
        color: '#3C885E',
        fontSize: 24
    },
    inRow: {
        fontSize: 18,
        marginTop: hp('2.5%'),
        fontWeight: "700",
        lineHeight: 27,
        flexDirection: 'row'
    },
})

export default Greetings;
