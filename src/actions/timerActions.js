import { TOGGLE_TIMER, GET_ELAPSED_TIME, GET_TIMER_SHOULD_RUN, INCREMENT_TIMER } from '../actions/types';

import store from '../store';


export const getTimerShouldRun = () => ({
    type: GET_TIMER_SHOULD_RUN,
    payload: store.getState().timerShouldRun,
})

export const toggleTimer = () => ({
    type: TOGGLE_TIMER,
    // TODO: Fix ! so toggle works both ways
    payload: !store.getState().timerShouldRun,
  })

export const getElapsedTime = () => ({
    type: GET_ELAPSED_TIME,
    payload: store.getState().elapsedTime,
})

export const incrementTimer = () => ({
    type: INCREMENT_TIMER,
    payload: store.getState().timer.elapsedTime++
})