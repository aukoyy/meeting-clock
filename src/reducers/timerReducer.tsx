import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

export interface TimerState {
    timerShouldRun: boolean,
    elapsedTime: number,
}

const initialState: TimerState = {
    timerShouldRun: false,
    elapsedTime: 0,
};


export default function(state: TimerState = initialState, action: any) {
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