import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

export const toggleTimer = () => ({
    type: TOGGLE_TIMER,
})


export const incrementTimer = () => ({
    type: INCREMENT_TIMER,
})