import axios from "axios";
import { GET_USERS_LIST } from './types';

const getUsersList = () => async (dispatch) => {
    try{
        const response = await axios.get(`https://fakestoreapi.com/users`);
        console.log(response);

        dispatch({
            type: GET_USERS_LIST,
            payload: response.data
        });

    }catch(err){
        console.log(err);
    }
}

export default getUsersList