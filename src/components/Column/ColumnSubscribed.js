import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, TouchableOpacity, FlatList, 
	Text, ScrollView } from 'react-native';
import uuid from 'uuid';
import {ADD_CARD} from '../../../store/actions/index';
import styles from './styles';
import Card from '../Card';

class ColumnSubscribed extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputForAddingPrayer: '',
			showFLForAnsweredPrayers: false
    }
  }

  static navigationOptions = ({navigation}) => ({
		tabBarLabel: ({ focused, horizontal, tintColor }) => (
			<View style={styles.labelMainCont}>
				<Text style={ focused ? styles.labelNameActive : styles.labelNameInActive}>
					SUBSCRIBED
				</Text>
				<View 
					style={styles.labelRoundContainer}>
					<Text style={styles.labelText}>
						{
							navigation.getParam('cards', [] ).length + 
							navigation.getParam('answeredCards', [] ).length
						}
					</Text>
				</View>
			</View>
		),
		swipeEnabled: false
	})
	
	handleInputForAddingPrayer = (text) => {
		this.setState({inputForAddingPrayer: text})
	}

	_keyExtractor = (item, index) => uuid();

	toggleAnsweredPrayers = () => {
		this.setState({ showFLForAnsweredPrayers: !this.state.showFLForAnsweredPrayers })
	}

	render() {
		let cards = this.props.navigation.getParam('cards', []);
		let answeredCards = this.props.navigation.getParam('answeredCards', [])
		const columnId = this.props.navigation.getParam('columnId', 0);
		
		return(
			<View style={styles.container}>
				<ScrollView 
					contentContainerStyle={styles.scrollViewCont
				}>
					<FlatList
						data={cards}
						extraData={this.props.cards}
						keyExtractor={this._keyExtractor}
						renderItem = {({item}) => (
							<Card 
								cardId = {item.id}
								columnId = {columnId} 
								navigate = {this.props.navigation.navigate}
							/>
						) }
					/>
				
					<TouchableOpacity 
						style={styles.showAnsweredPrayersTouchable}
						onPress={this.toggleAnsweredPrayers}>
						<View style={styles.showAnsweredPrayersCont}>
							<Text style={styles.showAnsweredPrayersText}>
								{ this.state.showFLForAnsweredPrayers ? 
										'HIDE ANSWERED PRAYERS' : 'SHOW ANSWERED PRAYERS'}
							</Text>
						</View>
					</TouchableOpacity>

					<FlatList
						contentContainerStyle={
							this.state.showFLForAnsweredPrayers ? 
								{ display: 'flex' } : { display: 'none' }
						}
						data={answeredCards}
						extraData={this.props.cards}
						keyExtractor={this._keyExtractor}
						renderItem = {({item}) => (
							<Card 
								cardId = {item.id}
								columnId = {columnId} 
								navigate = {this.props.navigation.navigate}
							/>
						) }
					/>
				</ScrollView>
			</View>
		)
  }
}

const mapStateToProps = (state) => {
	return {
		columns: state.columns,
		cards: state.cards
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addCard: bindActionCreators(ADD_CARD, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSubscribed);
