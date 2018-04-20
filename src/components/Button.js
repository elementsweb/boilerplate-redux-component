import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementCounter } from '../actions/counter';

export const Button = ({ children, counter, increment }) => (
  <button onClick={() => increment()}>{children} - {counter}</button>
);

Button.propTypes = {
  children: PropTypes.string,
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // state contains local state for component, selected by the
  // config.selectState() function passed to the component
  return {
    counter: ownProps.selectState(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(incrementCounter(ownProps.namespace))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
