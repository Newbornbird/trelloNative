import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import settings from '../../../images/settings.png';
import ColumnSubscribed from '../Column/ColumnSubscribed';
import ColumnMyPrayers from '../Column/ColumnMyPrayers';

const ColumnNavigator = createMaterialTopTabNavigator(
  {
		ColumnMyPrayers,
		ColumnSubscribed
	},
	{
		initialRouteName: 'ColumnMyPrayers', 
		tabBarOptions: {
			style: {
				backgroundColor: '#fff',
			},
			indicatorStyle: {
				backgroundColor: '#72A8BC'
			},
			activeTintColor: '#72A8BC',
			inactiveTintColor: '#C8C8C8',
			showIcon: true
		}	
	}
);

class Column extends Component {
	
	static router = ColumnNavigator.router;

	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('columnName', 'one more column'),
		headerStyle: {
			elevation: 0,
			shadowOpacity: 0,
			borderBottomWidth: 0
		},
		headerRight: (
			<TouchableOpacity
				onPress={ () => alert('Congratulations! You clicked on settings!')}
				style={ { marginRight: 20 } }>
				<Image source={settings}/>
			</TouchableOpacity>
		),
	});

	render() {
		let cards = this.props.navigation.getParam('cards', []);
		let answeredCards = this.props.navigation.getParam('answeredCards', [])
		let columnId = this.props.navigation.getParam('columnId', 0);
		return (
			<ColumnNavigator 
				navigation={this.props.navigation}
				cards = {cards}
				answeredCards={answeredCards}
				columnId = {columnId}
			/>
		)
	}
}

export default Column;
