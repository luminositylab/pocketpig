import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Header = ({
    level, chapterTitle, chapterLine
}) => {

    // const [svgMarkup, setsvgMarkup] = useState(`<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <circle cx="26" cy="26" r="23" fill="#EDF0EF" stroke="#D0CECE" stroke-width="6"/>
    // <path d="M20.81 19.87V15.1H29.12V37H23.78V19.87H20.81Z" fill="black"/>
    // </svg>
    // `)

    
    

    return(
    
        <NeuView width={wp('100%')} height = {hp('20%')} color='#FFFFFF' borderRadius={49}>      
            <View style = {styles.container}>
                <Text style={styles.level}>{level}</Text>
                <View style = {styles.inRow}>
                    <Text style = {styles.styleTitle}>{chapterTitle} :</Text>  
                    <Text style = {styles.boldText}> {chapterLine}</Text>
                </View>
            </View>
        </NeuView>
    
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    level: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 27  
    },
    styleTitle: {
        color: '#3C885E',
        fontWeight: 'bold',
        lineHeight: 27
    },
    inRow: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 27,
        flexDirection: 'row'
    },
    boldText: {
        fontWeight: '700',
        lineHeight: 27
    }
})

export default Header;
