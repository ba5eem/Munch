import { combineReducers } from 'redux';
import food from './food-reducer';
import love from './love-reducer';
import hate from './hate-reducer';

export default combineReducers({
  food: food,
  love: love,
  hate: hate
})