import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

export interface TimerState {
    timerShouldRun: boolean,
    elapsedTime: Number,
}

const initialState: TimerState = {
    timerShouldRun: false,
    elapsedTime: 0,
};


export default function(state: TimerState = initialState, action) {
    switch(action.type) {
        case TOGGLE_TIMER:
            return {
                ...state,
                timerShouldRun: !state.timerShouldRun
            } 
        case INCREMENT_TIMER:
            return {
                ...state,
                // TODO: make an increment. +1 is removed.
                // got red underlines when : TimerState was added
                elapsedTime: state.elapsedTime //+1
            }
        default:
            return state
    }
}