import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Svg, { Path } from "react-native-svg"


export default class RadioButton extends Component {

	// state = {
	// 	value: null,
	// };
	render() {
		const {value, PROP, handleAnswers, isAnswerCorrect } = this.props;
		// const { value } = this.state;
		
		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									handleAnswers(res, res.key)
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
							{
								isAnswerCorrect && res.ans === 'right' && <Svg
														style={{marginRight: wp('2%'), marginTop: hp('1.6%')}}
														width={11}
														height={11}
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														
													>
														<Path
														d="M1.707 7.148A1 1 0 0 0 .293 8.562l1.414-1.414Zm8.613-5.576A1 1 0 1 0 8.68.428l1.64 1.144ZM3.262 9.95l-.82-.571.82.571ZM.292 8.562l2.11 2.109 1.414-1.414-2.109-2.11L.293 8.563Zm3.79 1.96 6.238-8.95L8.68.428 2.44 9.378l1.641 1.144Zm-1.68.149a1.1 1.1 0 0 0 1.68-.149L2.442 9.38a.9.9 0 0 1 1.374-.122L2.402 10.67Z"
														fill="#737171"
														/>
													</Svg>
							}
						</View>
					);
				})}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
        
        marginBottom: 35,
        // alignItems: 'center', 
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginLeft: wp('3%'),
        marginRight: wp('13%'),
        fontSize: 18,
        lineHeight: 22.5,
        color: '#000',
        flexWrap: 'wrap',
        flexShrink:1,
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});