import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import LevelDefinition from './LevelDefinition';
import SvgRenderTop from './SvgRenderTop';
import SvgRenderBottom from './SvgRenderBottom';

const Level1 = () => {
    return(
        <View>
            <Header level = {"Level 1"} chapterTitle = {"Savings"} chapterLine = {"To save or not to save"}/>
            <SvgRenderTop/>
            <LevelDefinition chapterTitle = {"saving"}/>
            <SvgRenderBottom/>
        </View>
    )
}

export default Level1