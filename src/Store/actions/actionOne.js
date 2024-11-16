import { ADD_NUMBER } from './types';

const actionOne = (payload) => ({
    type: ADD_NUMBER,
    payload,
})

export default actionOne;