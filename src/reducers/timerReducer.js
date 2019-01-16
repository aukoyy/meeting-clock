import { TOGGLE_TIMER, GET_ELAPSED_TIME } from '../actions/types';

const initialState = ({
    timerShouldRun: false,
    elapsedTime: 0,
});


export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TIMER:
            return {
                ...state,
                timerShouldRun: action.payload
            }
        case GET_ELAPSED_TIME:
            return {
                ...state,
                elapsedTime: action.payload
            }
        default:
            return state
    }
}