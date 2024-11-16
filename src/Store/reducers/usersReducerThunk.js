import { GET_USERS_LIST } from './../actions/types';


const usersRedducer = (state=[] , action)=> {
    console.log(action);
    
    switch(action.type){
        case GET_USERS_LIST:
            return action.payload;
            // return [...action.payload];
        default:    
            return state;
    }
}
export default usersRedducer;