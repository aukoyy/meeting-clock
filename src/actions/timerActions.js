import { TOGGLE_TIMER, INCREMENT_TIMER } from '../actions/types';

import store from '../store';

export const toggleTimer = () => ({
    type: TOGGLE_TIMER,
    // FIXME: Fix ! so toggle works both ways
    // "Du skal aldri bruke getState()..."
    // Er det her man skal bruke dispatch??
    payload: !store.getState().timerShouldRun,
  })


export const incrementTimer = () => ({
    type: INCREMENT_TIMER,
    payload: store.getState().timer.elapsedTime++
})