import { TOGGLE_TIMER } from '../actions/types';

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
        default:
            return state
    }
}