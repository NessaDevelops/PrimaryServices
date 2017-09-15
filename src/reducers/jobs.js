import { REQUEST_JOBS, RECEIVE_JOBS } from '../constants/ActionTypes';

const initialState = [];

export default function jobs(state = initialState, action) {
  switch (action.type) {

  case REQUEST_JOBS:
    return [...action.jobs];

  case RECEIVE_JOBS:
  return [...action.jobs];

  default:
    return state;
  }
}