const axios = require('axios');

export const LOAD_FOOD = 'LOAD_FOOD';

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