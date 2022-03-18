import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import LevelDefinition from './LevelDefinition';
import LevelQuestions from './LevelQuestions';

const Level1 = ({navigation}) => {

    const [isSubmitted, setisSubmitted] = useState(false)

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

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