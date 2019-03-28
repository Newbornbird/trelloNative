import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class ButtonColumn extends Component {
  render() {
		let {columnName, cards, answeredCards, columnId} = this.props
		return (
			<TouchableOpacity 
				style={styles.buttonColumn}
				onPress={() => this.props.navigate(
					'Column', 
					{ 
						columnName,
						cards,
						answeredCards,
						columnId
					})}
				>
				<View>
					<Text style={styles.buttonColumnText}>
						{ this.props.columnName }
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	buttonColumn: {
		minWidth: '90%',
		height: 59,
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#E5E5E5',
		justifyContent: 'center',
		paddingLeft: 15
	},
	buttonColumnText: {
		fontSize: 17
	}
})

export default ButtonColumn;