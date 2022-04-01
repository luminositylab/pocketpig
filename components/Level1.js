import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LevelDefinition from './LevelDefinition';

const Level1 = ({navigation}) => {

    
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);


    return(
        <View>
            <LevelDefinition navigation={navigation} chapterTitle = {"saving"}/>
            {/* { isSubmitted && <LevelQuestions/>} */}
        </View>
    )
}

export default Level1