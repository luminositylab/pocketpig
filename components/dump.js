import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Svg, { Circle, Path, G, Rect, Defs } from "react-native-svg"
import RadioButton from './RadioButton';
import { NeuButton } from 'react-native-neu-element'
// import SvgRenderTop from './SvgRenderTop';

const PROP = [

    {
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
        answerOptions: [
            {
                key: 'key1',
                text: 'It is not important',
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




const LevelQuestions = ({
    params,
}) => 

{
    const [isFirstAnswerCorrect, setisFirstAnswerCorrect] = useState(false)
    const [isSecondAnswerCorrect, setisSecondAnswerCorrect] = useState(false)
    const [isThirdAnswerCorrect, setisThirdAnswerCorrect] = useState(false)
    const [isSubmitted, setisSubmitted] = useState(false)

    const handleAnswersOne = (res) => {
        setisFirstAnswerCorrect(res.ans === 'right')
    }

    const handleAnswersTwo = (res) => {
        setisSecondAnswerCorrect(res.ans === 'right')
    }

    const handleAnswersThree = (res) => {
        setisThirdAnswerCorrect(res.ans === 'right')
    }

    const handleSubmit = () => {
        setisSubmitted(true)
    }

    return (
        <View>
            
            <Header level = {"Level 1"} chapterTitle = {"Savings"} chapterLine = {"To save or not to save"}/>
            {/* <SvgRenderTop/> */}
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
                    <Path d="M19.17 32.89C19.85 32.35 20.16 32.1 20.1 32.14C22.06 30.52 23.6 29.19 24.72 28.15C25.86 27.11 26.82 26.02 27.6 24.88C28.38 23.74 28.77 22.63 28.77 21.55C28.77 20.73 28.58 20.09 28.2 19.63C27.82 19.17 27.25 18.94 26.49 18.94C25.73 18.94 25.13 19.23 24.69 19.81C24.27 20.37 24.06 21.17 24.06 22.21H19.11C19.15 20.51 19.51 19.09 20.19 17.95C20.89 16.81 21.8 15.97 22.92 15.43C24.06 14.89 25.32 14.62 26.7 14.62C29.08 14.62 30.87 15.23 32.07 16.45C33.29 17.67 33.9 19.26 33.9 21.22C33.9 23.36 33.17 25.35 31.71 27.19C30.25 29.01 28.39 30.79 26.13 32.53H34.23V36.7H19.17V32.89Z" fill="#000" />
                    </Svg>
                    <View style = {styles.styleTitle}>
                    <Text style = {styles.styleHeading}>Lets try to clarify with a few questions</Text>
                    </View>
                </View>
            </View>
            {/* {{alignItems: 'center', backgroundColor: '#E3E3E3', borderRadius : '30', width : wp('80%'), height : hp('20%')}}     */}
            {
                !isFirstAnswerCorrect && <View> <View style={styles.centered}>
                    <View style = {styles.styleQueHeading}>
                        <Text style = {styles.styleLearning}>So, What is </Text>
                        <Text style = {styles.chapterTitle}>saving?</Text>
                    </View>
                    <View style = {styles.styleQuestions}>
                        <RadioButton PROP={PROP[0].answerOptions} handleAnswers = {handleAnswersOne} isAnswerCorrect = {isFirstAnswerCorrect} />
                    </View>
                </View><View style={{flexDirection: 'row', margin: hp("6%")}}>
                {isFirstAnswerCorrect && <><View style={{ marginTop: hp("2%"), marginRight: wp("4%") }}>
                            <Text style={{ color: "#3C885E", fontWeight: '400', fontSize: 14, lineHeight: 21 }}>That's correct! Great Job!</Text>
                            <Text>Let's move on to the next question</Text>
                        </View><View style={{ position: 'relative' }}>
                                <NeuButton
                                    color="#eef2f9"
                                    width={wp("15%")}
                                    height={hp("7%")}
                                    borderRadius={100}
                                    onPress={handleSubmit}
                                >
                                    <Svg
                                        width={86}
                                        height={86}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <G filter="url(#a)">
                                            <Rect
                                                width={53}
                                                height={53}
                                                rx={26.5}
                                                transform="matrix(1 0 0 -1 15 68)"
                                                fill="#eef2f9" />
                                        </G>
                                        <Path
                                            d="M28 39.5a1.5 1.5 0 0 0 0 3v-3Zm26.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L50.88 41l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM28 42.5h25v-3H28v3Z"
                                            fill="#000" />
                                        <Defs></Defs>
                                    </Svg>

                                </NeuButton>
                            </View></>}
            </View>
            </View>
            }
            {
                isFirstAnswerCorrect && !isSecondAnswerCorrect && <View style={styles.centered}>
                    <View style = {styles.styleQueHeading}>
                        <Text style = {styles.styleLearning}>Why is </Text>
                        <Text style = {styles.chapterTitle}>savings?</Text>
                        <Text style = {styles.styleLearning}>important?</Text>
                    </View>
                    <View style = {styles.styleQuestions}>
                        <RadioButton PROP={PROP[1].answerOptions} handleAnswers = {handleAnswersTwo} isAnswerCorrect = {isSecondAnswerCorrect} />
                    </View>
                </View> && <View style={{flexDirection: 'row', margin: hp("6%")}}>
                <View style={{marginTop: hp("2%"), marginRight: wp("4%")}}>
                    <Text style={{color: "#3C885E", fontWeight: '400', fontSize: 14, lineHeight: 21}}>That's correct! Great Job!</Text>
                    <Text>Let's move on to the next question</Text>
                </View>
                <View style={{position: 'relative'}}>
                    <NeuButton
                        color="#eef2f9"
                        width={wp("15%")}
                        height={hp("7%")}
                        borderRadius={100}
                        onPress = {handleSubmit}
                    >
                    <Svg
                        width={86}
                        height={86}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <G filter="url(#a)">
                        <Rect
                            width={53}
                            height={53}
                            rx={26.5}
                            transform="matrix(1 0 0 -1 15 68)"
                            fill="#eef2f9"
                        />
                        </G>
                        <Path
                        d="M28 39.5a1.5 1.5 0 0 0 0 3v-3Zm26.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L50.88 41l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM28 42.5h25v-3H28v3Z"
                        fill="#000"
                        />
                        <Defs></Defs>
                    </Svg>
                    
                    </NeuButton>
                </View>
            </View>
            }
            
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


export default LevelQuestions;
