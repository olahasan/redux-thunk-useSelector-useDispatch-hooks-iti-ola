import { DIVISION_NUMBER, MULTIPLICATION_NUMBER } from './../actions/types';


const reducerTwo = (state = 10, action)=> {
    switch (action.type) {
        case MULTIPLICATION_NUMBER :
            return action.payload * 3
        case DIVISION_NUMBER :
            return action.payload / 2    
        default :
           return state;
    }
}

export default reducerTwo ;