import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import mainReducer from './store/reducers/index';
import MyDesk from './src/components/MyDesk';
import Column from './src/components/Column/index';
import CardInfo from './src/components/CardInfo';


const RootStack = createStackNavigator(
  {
		MyDesk,
		Column: {
			screen: Column,
			navigationOptions: () => ({
				headerBackTitle: null,
				
			}),
		},
		CardInfo
	},
	{
		initialRouteName: 'MyDesk',
		headerLayoutPreset: 'center'
	}
);

const AppContainer = createAppContainer(RootStack);

const store = createStore(mainReducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
  }
}
