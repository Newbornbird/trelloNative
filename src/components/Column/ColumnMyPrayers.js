import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, TouchableOpacity,
	TextInput, Image, FlatList, 
	Text, ScrollView, Platform, Dimensions } from 'react-native';
import uuid from 'uuid';
import {ADD_CARD} from '../../../store/actions/index';
import styles from './styles';
import addImage from '../../../images/add.png';
import Card from '../Card';
import settings from '../../../images/settings.png';

// export const isTablet = !!Platform.isPad;
// export const viewportWidth = Dimensions.get('window').width;
// export const viewportHeight = Dimensions.get('window').height;

class ColumnMyPrayers extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputForAddingPrayer: '',
			showFLForAnsweredPrayers: false
		}
  }

  static navigationOptions = {
		title: 'MY PRAYERS',
		swipeEnabled: false,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
			borderBottomWidth: 0
			
    },
    headerRight: (
      <TouchableOpacity
        onPress={ () => alert('Congratulations! You clicked on settings!')}
        style={ { marginRight: 20 } }>
      	<Image source={settings} />
      </TouchableOpacity>
    ),
	}
	
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
		let columnId = this.props.navigation.getParam('columnId', 0);
		let { addCard } = this.props;
		
		return(
			<View style={styles.container}>
				<View style={styles.containerForInput}>
					<TouchableOpacity 
						style={styles.buttonForAddingPrayer} 
						onPress={ () => {
							addCard(this.state.inputForAddingPrayer, columnId);
							this.handleInputForAddingPrayer('');
						} }>
						<Image source={addImage}/>
					</TouchableOpacity>
						<TextInput 
							maxLength={65}
							style={styles.inputForAddingPrayer}
							placeholder='Add a prayer...'
							placeholderColor='#9C9C9C'
							onChangeText={this.handleInputForAddingPrayer}
							value={this.state.inputForAddingPrayer}>
					</TextInput>
				</View>
				<ScrollView 
					contentContainerStyle={styles.scrollViewCont}
				>
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
							contentContainerStyle={[ 
								this.state.showFLForAnsweredPrayers ? 
									{ display: 'flex' } : { display: 'none' }
							]}
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

export default connect(mapStateToProps, mapDispatchToProps)(ColumnMyPrayers);
