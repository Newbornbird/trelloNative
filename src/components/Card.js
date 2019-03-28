import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, 
	TouchableOpacity, Image, PanResponder}  from 'react-native';
import { DELETE_CARD, TOGGLE_CARD_STATUS, TO_PRAY } from '../../store/actions';
import checkboxOff from '../../images/Off.png'; 
import checkboxOn from '../../images/On.png';
import line from '../../images/state.png';
import user from '../../images/user.png';
import hands from '../../images/prayer_line.png';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rightPositionOfCard: 0,
			rightPositionOfDelete: -80
		}

		this.panR = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => { 
				this.setState({
					rightPositionOfCard: gestureState.dx * -1,
					rightPositionOfDelete: -80 + (gestureState.dx * -1)
				});
			},
			onPanResponderRelease: (evt, gestureState) => {
				if(gestureState.dx < -40)
					this.setState({ 
						rightPositionOfCard: 80,
						rightPositionOfDelete: 0
					});
				else {
					this.setState({ 
						rightPositionOfCard: 0,
						rightPositionOfDelete: -80
					});
				}
			}
		})
	}

	render() {
		let {cardData, deleteCard, cardId, columnId, toggleCardStatus, toPray} = this.props;
		return (
			<View style={styles.mainContainer}>
				<View 
					style={
						[
							styles.cardContainer, 
							{right: this.state.rightPositionOfCard}
						]
					} 
					{ ...this.panR.panHandlers }>
					<Image source={line}/>
					<TouchableOpacity 
						onPress={() => toggleCardStatus(columnId, cardId, cardData.prayerIsAnswered)}
						style={styles.cardCheckBoxCont}>
						<Image 
							style={styles.cardCheckbox}  
							source={
								// cardData ? (cardData.prayerIsAnswered ? checkboxOn : checkboxOff) : checkboxOff
								cardData.prayerIsAnswered ? checkboxOn : checkboxOff
							}
							/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => {this.props.navigate(
							'CardInfo', 
							{   
								cardId,
								toPray
							})
						}}
						style={styles.cardDescriptionCont}>
						<Text style={ 
							cardData ? 
								(cardData.prayerIsAnswered ? styles.cardDescriptionWithDecoration : styles.cardDescription) : styles.cardDescription  }>
							{ cardData ? 
									cardData.cardDescription.length > 17 ? 
										(cardData.cardDescription.substring(0, 17) + '...') : 
											cardData.cardDescription : 'some prayer' }
						</Text>
					</TouchableOpacity>
					<View style={styles.commonContForSubsHands}>
						<View style={styles.contForSubsHands}>
							<TouchableOpacity onPress={ () => console.warn(cardData.timesPrayedByMe) }>
								<Image source={user}/>
							</TouchableOpacity>
							<Text style={styles.cardText}>
								{cardData ? cardData.users : '1'}
							</Text>
						</View>
						<View style={[styles.contForSubsHands, {marginTop: 1}]}>
							<TouchableOpacity onPress={() => toPray(cardId)}>
								<Image source={hands}/>
							</TouchableOpacity>
							<Text style={styles.cardText}>
								{ cardData ? cardData.timesPrayedByMe + cardData.timesPrayedByOthers : '1' }
							</Text>
						</View>
					</View>
				</View>
					<TouchableOpacity 
						onPress={() => deleteCard(columnId, cardId, cardData.prayerIsAnswered)}
						style={[styles.buttonDeleteTouch, { right: this.state.rightPositionOfDelete }]}>
						<View 
							style={[
								styles.buttonDelete
							]}
							>
							<Text style={styles.buttonDeleteText}>
								Delete
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		flex: 1
	},
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#E5E5E5',
		width: '90%',
		height: 61,
		position: 'relative',
		right: 62
		
	},
	cardDescriptionCont: {
		width: '55%'
	},
	cardDescription: {
		fontSize: 17,
		color: '#514D47'
	},
	cardDescriptionWithDecoration: {
		fontSize: 17,
		color: '#514D47',
		textDecorationLine: 'line-through'
	},
	cardText: {
		fontSize: 12
	},
	cardCheckBoxCont: {
		width: '12%',
		alignItems: 'center'
	},
	commonContForSubsHands: {
		width: '32%',
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contForSubsHands: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '50%',
		justifyContent: 'space-around',
	},
	cardCheckbox: {
	},
	buttonDeleteTouch: {
		position: 'absolute', 
		backgroundColor: '#AC5253',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80,
		height: 62
	},
	buttonDeleteView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonDeleteText: {
		color: '#fff'
	}
})

const mapStateToProps = (state,ownProps) => {
	return {
		cardData: state.cards[ownProps.cardId],
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCard: bindActionCreators(DELETE_CARD, dispatch),
		toggleCardStatus: bindActionCreators(TOGGLE_CARD_STATUS, dispatch),
		toPray: bindActionCreators(TO_PRAY, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

const a = {};