import { UPDATE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilters = Object.freeze({
  bounds: {},
  dates: {}
})

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze;

  switch (action.type){
  case UPDATE_FILTER: {
    const newState = merge({}, state);
    newState[action.filter] = action.value;
    return newState;
  }
  default: {
    return state;
  }
  }
}

export default filterReducer;