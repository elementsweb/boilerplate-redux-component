import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';

const initialState = 0;

const update = (namespace = 'default') => (state = initialState, action) => {
  switch (action.type) {
    case `@@component/${namespace}/${INCREMENT_COUNTER}`:
      return state + 1;

    case `@@component/${namespace}/${DECREMENT_COUNTER}`:
      return state - 1;

    default:
      return state;
  }
};

export default update;
