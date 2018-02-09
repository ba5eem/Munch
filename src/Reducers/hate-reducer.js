import { HATE_FOOD } from '../Actions/food-actions.js';

const hate = (state = [], action) => {

  switch(action.type){
    case HATE_FOOD:
      return [...action.payload];
    default:
      return state
  }
}

export default hate;