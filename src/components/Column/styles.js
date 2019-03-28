import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
	labelMainCont: {
		flexDirection: 'row', 
		alignItems: 'center'
	},
	labelRoundContainer: {
		borderRadius: 10, 
		backgroundColor: '#AC5253', 
		width: 20, 
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 5
	},
	labelNameActive: {
		color: '#72A8BC'
	},
	labelNameInActive: {
		color: '#C8C8C8'
	},
	labelText: {
		color: '#fff', 
		fontWeight: 'bold',
	},
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%'
	},
	containerForInput: {
		height: 46,
		minWidth: '90%',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#E5E5E5'
	},
	buttonForAddingPrayer: {
		marginLeft: 14
	},
	inputForAddingPrayer: {
		fontSize: 17,
		width: '70%',
		paddingLeft: 10
	},
	scrollViewCont: {
		justifyContent: 'flex-start',
		minWidth: '100%', 
		paddingBottom: 20,
	},
	showAnsweredPrayersTouchable: {
		marginTop: 20,
		width: '100%',
		alignItems: 'center'
		
	},
	showAnsweredPrayersCont: {
		backgroundColor: '#BFB393',
		borderRadius: 15,
		...Platform.select({
      ios: {
        width: '50%'
      },
      android: {
				width: '50%'
			}
		}),
		height: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	showAnsweredPrayersText: {
		color: '#fff',
		fontSize: 12,
		borderRadius: 15,
		fontWeight: 'bold'
	}
})

export default styles;
