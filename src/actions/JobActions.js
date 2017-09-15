import { REQUEST_JOBS, RECEIVE_JOBS } from '../constants/ActionTypes';

function requestJobs() {
  return {
    type: REQUEST_JOBS
  }
};

function receiveJobs(json) {
  return {
    type: RECEIVE_JOBS,
    pokemons: json.results
  }
}

export function fetchJobs() {
  return dispatch => {
    dispatch(requestJobs())
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(response => response.json())
      .then(json => dispatch(receiveJobs(json)))
  }
}