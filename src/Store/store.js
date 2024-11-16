import { applyMiddleware, compose, createStore } from "redux";
// import reducerOne from './reducers/reducerOne';
import allReducers from './reducers/combineReducer';
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension'


// import reducer from './reducers/index'

const devToolExtention =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(allReducers , composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(allReducers , composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(allReducers , compose(applyMiddleware(thunk), devToolExtention));

// const store = createStore(allReducers , devToolExtention)
// const store = createStore(reducerOne , devToolExtention)
export default store;