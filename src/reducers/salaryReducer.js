import { GET_SALARIES, NEW_SALARY } from '../actions/types';

const initialState = {
    salaryArray: [200, 300, 250],
    salarySum: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALARIES:
            return {
                ...state,
                salaryArray: action.payload
            }
        // case NEW_SALARY:
        //     return {
        //         ...state,
                
        //     }
        default:
            return state;
    }
}