import { Dispatch } from "redux";
import { AppState } from ".";

enum TypeKeys {
    TOGGLE_TIMER = 'TOGGLE_TIMER',
    INCREMENT_TIMER = 'INCREMENT_TIMER',
}


interface ToggleTimerAction {
    type: TypeKeys.TOGGLE_TIMER;
}

interface IncrementTimerAction {
    type: TypeKeys.INCREMENT_TIMER;
}

type ActionTypes = ToggleTimerAction | IncrementTimerAction;

// setSomethingActionBuilder??
// What is the difference between an action, and an actionbuilder?
// normal actions, instead of an own file?
// This now recembles more the duck.ts files
export const setToggleTimerActionBuilder = (): ToggleTimerAction => ({
    type: TypeKeys.TOGGLE_TIMER
})

// Same as: 
// export function setToggleTimerActionBuilder(): ToggleTimerAction {
//     return { type: TypeKeys.TOGGLE_TIMER };
// }

export const setIncrementTimerActionBuilder = (): IncrementTimerAction => ({
    type: TypeKeys.INCREMENT_TIMER,
})
/* ================================================ */

export interface timerState {
    timerShouldRun: boolean,
    elapsedTime: number,
}

const initialState: timerState = ({
    timerShouldRun: false,
    elapsedTime: 0,
});


export default function(
    state: timerState = initialState,
    action: ActionTypes
    ): timerState {
    switch(action.type) {
        case TypeKeys.TOGGLE_TIMER:
            return {
                ...state,
                timerShouldRun: !state.timerShouldRun
            } 
        case TypeKeys.INCREMENT_TIMER:
            return {
                ...state,
                elapsedTime: state.elapsedTime+1
            }
        default:
            return state
    }
}

// do
export function doToggleTimer(dispatch: Dispatch<AppState>) {
    return () => {
        dispatch(setToggleTimerActionBuilder());
    }
}