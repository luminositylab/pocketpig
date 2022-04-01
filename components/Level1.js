import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LevelDefinition from './LevelDefinition';

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
            <LevelDefinition navigation={navigation} chapterTitle = {"saving"} handleSubmit = {handleSubmit}/>
            {/* { isSubmitted && <LevelQuestions/>} */}
        </View>
    )
}

export default Level1