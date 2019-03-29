import React, {Component} from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, View, FlatList, 
	Dimensions, TouchableOpacity, Image, Platform} from 'react-native';
import ButtonColumn from './ButtonColumn';
import {ADD_COLUMN} from '../../store/actions';
import addImage from '../../images/add.png';

export const isTablet = !!Platform.isPad;
export const viewportWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;

class MyDesk extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'My Desk',
		headerRight: ( 
			<TouchableOpacity
				onPress={ navigation.getParam('addColumn', () => alert('addColumn')) }
				style={ { marginRight: 20 } }>
				<Image source={addImage}/>
			</TouchableOpacity> ),
	});

	componentDidMount() {
		this.props.navigation.setParams({addColumn: this.props.addColumn})
	}

	_keyExtractor = (item, index) => uuid();

	render() {
		let { columns } = this.props;
		return(
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={styles.flatListCont}
					data={columns}
					keyExtractor={this._keyExtractor}
					renderItem={({item}) => (
						<ButtonColumn 
							columnName = {item.columnName} 
							columnId = {item.id}
							cards={item.cards}
							answeredCards = {item.answeredCards}
							navigate = {this.props.navigation.navigate}/>)}
						/>
			</View>
		)
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	flatListCont: {
		alignItems: 'center', 
		minWidth: '100%'
	}
});

const mapStateToProps = state => ({
	columns: state.columns
});

const mapDispatchToProps = dispatch => ({
  addColumn: bindActionCreators(ADD_COLUMN, dispatch)
});

let a = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyDesk);
