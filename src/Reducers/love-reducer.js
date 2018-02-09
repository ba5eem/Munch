import { LOVE_FOOD } from '../Actions/food-actions.js';


const love = (state = [], action) => {

  switch(action.type){
    case LOVE_FOOD:
      return [...action.payload];
    default:
      return state
  }
}

export default love;