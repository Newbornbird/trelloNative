import {combineReducers} from 'redux';
import columns from './columns';
import cards from './cards';
import comments from './comments';

export default combineReducers({
  columns,
  cards,
  comments
});




