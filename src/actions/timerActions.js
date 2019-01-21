import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

import store from '../store';

export const toggleTimer = () => ({
    type: TOGGLE_TIMER,
})


export const incrementTimer = () => ({
    type: INCREMENT_TIMER,
    payload: store.getState().timer.elapsedTime++
})