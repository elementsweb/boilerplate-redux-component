import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants';

export const incrementCounter = (namespace = 'default') => ({
  type: `@@component/${namespace}/${INCREMENT_COUNTER}`,
});

export const decrementCounter = (namespace = 'default') => ({
  type: `@@component/${namespace}/${DECREMENT_COUNTER}`,
});
