import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Welcome } from '@storybook/react/demo';

import Button, { componentReducer } from '../src/index';

import './styles.scss';

// create mock root reducer
const rootReducer = combineReducers({
  itemTypeOne: combineReducers({
    // do componentReducer() for 'default'
    component: componentReducer('one')
  }),
  itemTypeTwo: combineReducers({
    component: componentReducer('two')
  })
});

// create the redux store to simulate wrapper application
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (module.hot) {
  module.hot.accept('../src/reducers', () => store.replaceReducer(require('../src/reducers')));
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('single component', () => (
    <Provider store={store}>
      <Button selectState={state => state.itemTypeOne.component} namespace="one">Button</Button>
    </Provider>
  ))
  .add('multiple components', () => (
    <Provider store={store}>
      <div>
        <Button selectState={state => state.itemTypeOne.component} namespace="one">Button One</Button>
        <Button selectState={state => state.itemTypeTwo.component} namespace="two">Button Two</Button>
      </div>
    </Provider>
  ));
