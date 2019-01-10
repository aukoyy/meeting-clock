import { GET_SALARIES, NEW_SALARY } from '../actions/types';

const initialState = {
    salaries: [200, 300, 250]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALARIES:
            return {
                ...state,
                salaries: action.payload
            }
        // case NEW_SALARY:
        //     return {
        //         ...state,
                
        //     }
        default:
            return state;
    }
}