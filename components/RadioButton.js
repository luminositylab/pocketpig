import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class RadioButton extends Component {
	state = {
		value: null,
	};
	render() {
		const { PROP } = this.props;
		const { value } = this.state;
		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
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
        marginRight: wp('6%'),
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