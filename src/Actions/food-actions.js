const axios = require('axios');

export const LOAD_FOOD = 'LOAD_FOOD';
export const LOVE_FOOD = 'LOVE_FOOD';
export const HATE_FOOD = 'HATE_FOOD';

//const artistsURL = 'http://54.88.118.239/food';
const _96814 = 'http://192.168.0.9:9000/food/96814';

export const loadFood = () => {
  return function(dispatch){
    return axios.get(_96814)
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