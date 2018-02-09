const axios = require('axios');

export const LOAD_FOOD = 'LOAD_FOOD';
export const LOVE_FOOD = 'LOVE_FOOD';
export const HATE_FOOD = 'HATE_FOOD';

//const artistsURL = 'http://54.88.118.239/food';

export const loadFood = () => {
  return function(dispatch){
    return axios.get()
    .then( food => {
      dispatch({
        type: LOAD_FOOD,
        food: food.data
      });
    });
  }
}

export const loveFood = (food) => {
  return{
    type: LOVE_FOOD,
    payload: food
  }
}

export const hateFood = (food) => {
  return{
    type: HATE_FOOD,
    payload: food
  }
}