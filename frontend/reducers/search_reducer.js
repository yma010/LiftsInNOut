import { UPDATE_SEARCH } from '../actions/search_actions';

const defaultState = {
  coords: {
    lat: 34.0522,
    lng: -118.2437
  }
};

const searchReducer = (state = defaultState, action) => {
  Object.freeze;

  switch(action.type) {
  case UPDATE_SEARCH:
    return {coords: action.coords};
  default: 
    return state;
  }

}

export default searchReducer;