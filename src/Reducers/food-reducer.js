import { LOAD_FOOD } from '../Actions/food-actions.js';
import { data } from './data';

const food = (state = data, action) => {

  switch(action.type){
    case LOAD_FOOD:
      return action.food;
    default:
      return state
  }
}

export default food;