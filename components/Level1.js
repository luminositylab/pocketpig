import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import LevelDefinition from './LevelDefinition';
import LevelQuestions from './LevelQuestions';

const Level1 = () => {

    const [isSubmitted, setisSubmitted] = useState(false)

    const handleSubmit = () => {
        setisSubmitted(true)
    }

    return(
        <View>
            {!isSubmitted && <LevelDefinition chapterTitle = {"saving"} handleSubmit = {handleSubmit}/>}
            { isSubmitted && <LevelQuestions/>}
        </View>
    )
}

export default Level1