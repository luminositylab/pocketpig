import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Svg, { Circle, Path, G, Rect, Defs } from "react-native-svg"
import RadioButton from './RadioButton';
import { NeuButton } from 'react-native-neu-element'
import Two from '../assets/twoNo.svg'
import NextQue from '../assets/nextQue.svg'

const PROP = [

    {
        question: 'So, What is saving?',
        answerOptions: [
            {
                key: 'key1',
                text: 'Using your money to buy goods and services',
                ans: 'wrong'
            },
            {
                key: 'key2',
                text: 'Putting your money away so you can spend it later',
                ans: 'right'
            },
            {
                key: 'key3',
                text: 'Finding a $5 bill while going to school',
                ans: 'wrong'
            },
        ]
    },
    {
        question: 'Why is savings important?',
        answerOptions: [
            {
                key: 'key1',
                text: "I don't want to save as it is not important to save",
                ans: 'wrong'
            },
            {
                key: 'key2',
                text: 'So you can have money for future purchases or emergencies',
                ans: 'right'
            },
            {
                key: 'key3',
                text: 'So you can have more money in your bank account',
                ans: 'wrong'
            },
        ]
    },
    {
        question: 'What is correct example of saving?',
        answerOptions: [
            {
                key: 'key1',
                text: 'Spending all your allowance right away',
                ans: 'wrong'
            },
            {
                key: 'key2',
                text: 'Putting aside some of your allowance over time',
                ans: 'wrong'
            },
            {
                key: 'key3',
                text: 'Giving some of your allowance to your friends',
                ans: 'right'
            },
        ]
    }

];




export default function LevelQuestions ({
    navigation, route
}) 

{
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    
    const [isAnswerCorrect, setisAnswerCorrect] = useState(false)
    const [isAttended, setisAttended] = useState(false)
    const [quesNo, setquesNo] = useState(0) 
    const [value, setValue] = useState(null)
    
    useEffect(() => {
        console.log(route.params["levelInformation"][route.params["currentLevel"]-1]["mcq"][0])
    }, [])

    const handleAnswers = (res, value) => {
        setValue(value)
        setisAttended(true)
        setisAnswerCorrect(res.ans === 'right')
    }

    const handleSubmit = () => {
        if(quesNo >= (route.params["levelInformation"][route.params["currentLevel"]-1]["mcq"].length-1)){
            navigation.navigate({ name: 'Greetings', params: {currentLevel: route.params["currentLevel"], levelInformation: route.params["levelInformation"]}})         
        }
        else{
            setValue(null)
            setquesNo(quesNo+1)
            setisAnswerCorrect(false)
            setisAttended(false)
        }
        

    }

    return (
        <View>
            
            <Header level = {route.params["levelInformation"][route.params["currentLevel"]-1]["level"]} chapterTitle = {route.params["levelInformation"][route.params["currentLevel"]-1]["title"]} chapterLine = {route.params["levelInformation"][route.params["currentLevel"]-1]["chapterLine"]}/>
            <View style = {styles.container}>
                <View style = {styles.inRow}>
                    <Two/>
                    <View style = {styles.styleTitle}>
                    <Text style = {styles.styleHeading}>Lets try to clarify with a few questions</Text>
                    </View>
                </View>
            </View>
            {/* {{alignItems: 'center', backgroundColor: '#E3E3E3', borderRadius : '30', width : wp('80%'), height : hp('20%')}}     */}
            <View style={styles.centered}>
                    <View style = {styles.styleQueHeading}>
                        <Text style = {styles.styleLearning}>{route.params["levelInformation"][route.params["currentLevel"]-1]["mcq"][quesNo]["question"]}</Text>
                        
                    </View>
                    <View style = {styles.styleQuestions}>
                        <RadioButton value = {value} PROP={route.params["levelInformation"][route.params["currentLevel"]-1]["mcq"][quesNo]["answerOptions"]} handleAnswers = {handleAnswers} isAnswerCorrect = {isAnswerCorrect} />
                    </View>
            </View>
            
            <View style={{flexDirection: 'row', margin: hp("6%")}}>
                {isAnswerCorrect && <View style={{marginTop: hp("2%"), marginRight: wp("4%")}}>
                    <Text style={{color: "#3C885E", fontWeight: '400', fontSize: 14, lineHeight: 21}}>That's correct! Great Job!</Text>
                    <Text>Let's move on to the next step</Text>
                </View>}
                {!isAnswerCorrect && isAttended && <View style={{marginTop: hp("2%"), marginRight: wp("4%")}}>
                    <Text style={{color: "#FF0000", fontWeight: '400', fontSize: 14, lineHeight: 21}}>Oops! That's not quite right</Text>
                    
                </View>}
                {isAnswerCorrect && <View style={{position: 'relative'}}>
                        <NextQue onPress = {handleSubmit}/>
                    </View>
                }
            </View>
        </View>
    );
}
    const styles = StyleSheet.create({
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
        styleQueHeading: {
            marginTop: hp('2%'),
            marginLeft: wp('5%'),
            flexDirection: 'row'
        },  
        styleLearning: {
            fontWeight: '400',
            fontSize: 24
        },
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
            // marginTop: hp('1.5%'),
            marginLeft: wp("7%"),
            lineHeight: 36,
            flexDirection: 'row'  
        },
        styleHeading: {
            fontWeight: '400',
            fontSize: 24,
            lineHeight: 36,
            flexWrap: 'wrap',
            marginLeft: -wp('2%'),
            marginRight: wp('23%')
        },
        chapterTitle: {
            color: '#3C885E',
            fontSize: 24
        },
        inRow: {
            fontSize: 18,
            marginTop: hp('1.5%'),
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

