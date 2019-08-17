import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

const MILLISECOND = 0.01;

export interface TimerState {
    timerShouldRun: boolean,
    durationInSeconds: number,
}

const initialState: TimerState = {
    timerShouldRun: false,
    durationInSeconds: 0,
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
                durationInSeconds: state.durationInSeconds+MILLISECOND
            }
        default:
            return state
    }
}