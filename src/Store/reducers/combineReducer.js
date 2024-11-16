import { combineReducers } from "redux";
import reducerOne from './reducerOne';
import reducerTwo from './reducerTwo';
import usersRedducer from './usersReducerThunk';

const allReducers = combineReducers({
       one: reducerOne,
       two: reducerTwo,
       users : usersRedducer
})
export default allReducers;