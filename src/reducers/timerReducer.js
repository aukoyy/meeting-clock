import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

const initialState = ({
    timerShouldRun: false,
    elapsedTime: 0,
});


export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TIMER:
            return {
                ...state,
                timerShouldRun: !state.timerShouldRun
            } 
        case INCREMENT_TIMER:
            return {
                ...state,
                elapsedTime: state.elapsedTime+1
            }
        default:
            return state
    }
}