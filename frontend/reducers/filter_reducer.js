import { UPDATE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilters = Object.freeze({
  bounds: {},
})

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze;

  switch (action.type){
  case UPDATE_FILTER: {
    const newFilter = merge({}, state);
    
    newFilter[action.filter] = action.value;
    return newFilter;
  }
  default: {
    return state;
  }
  }
}

export default filterReducer;