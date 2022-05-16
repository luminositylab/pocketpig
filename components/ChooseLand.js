import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, G, Image, Path, Pattern, Rect, Use } from 'react-native-svg';
import Plant from '../assets/plant.svg'
import Pond from '../assets/pond.svg'

const ChooseLand = ({
    onPress,
}) => (
    <View style = {styles.container}>
        <TouchableOpacity key="Plant" style={styles.stylePlant} onPress = {() => 
            {    
                onPress('Plant')
            }
        }>
            <Plant style={{top: 30, left: 35}}/>
        </TouchableOpacity>
        <Text style = {styles.styleText}>OR</Text>
        <TouchableOpacity key="Pond" style={styles.stylePlant} onPress = {() => 
            {
                   onPress('Pond')
            }
        }>
            <Pond style={{top: 10, left: 12}}/>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        top: 70,
        left: 20,
    },
    styleText: {
        marginRight: 35,
        left: 16,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        top: 40,
    },
    stylePlant: {
        position: 'relative',
        width: 128,
        height: 118,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
    }
    
});

export default ChooseLand;
