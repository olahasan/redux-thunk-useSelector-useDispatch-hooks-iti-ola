import { MINUS_NUMBER } from "../actions/types";
import { ADD_NUMBER } from './../actions/types';

const reducerOne = (state = 5, action) => {
    switch(action.type){
      case ADD_NUMBER:
        return action.payload + 1
      case MINUS_NUMBER:
        return action.payload - 1
      default:      
        return state;
    }
}

export default reducerOne