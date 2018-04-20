# Boilerplate Redux Component
Project that's designed to be cloned when developing a new React component with Redux that can be used across projects.

You should only use this boilerplate when you need to develop a reusable component that's composed of many components and complex actions or component state.

This is currently designed for components that are built and transpiled as part of an applications webpack build.

✔️ Integrates with your existing Redux store to allow you to writing middleware for actions emitted by the component

✔️ Support for multiple reusable React-Redux components in an existing Redux application through separate state reduction

✔️ Custom state selectors to store component state in separate places in the Redux store

## Demo
You can import your component into the storybook, a good place to showcase your component.

Run the storybook with `npm run storybook` and navigate to `http://localhost:6006` in your browser.

### Github Pages
Before commiting your changes to Github you can run `npm run build-storybook` to build the storybook so that it can be hosted on Github pages.

## Usage
### Import the component
Import the component/s into your project:

```javascript
import Button from 'MODULE_NAME';
```

Add the component to a parent component:
```javascript
<Button selectState={state => state.itemTypeTwo.component} namespace="two">Button Two</Button>
```

- __`selectState`__ is a function to tell the component where it should store its state in your application store.

- __`namespace`__ is the namespace to use in action types. For the above example the action trigger would look something like: `@@component/two/INCREMENT_COUNTER`. Defaults to `default`, but it's recommended you always use a key, especially if you use the same component multiple times in one view.

### Include reducers
You can store the component state anywhere in your Redux store, just import the component reducer:

```
import { combineReducers } from 'redux';
import { componentReducer } from 'MODULE_NAME';

const rootReducer = combineReducers({
  itemTypeTwo: combineReducers({
    component: componentReducer('two')
  })
});
```

### Import SASS styles
Import the styles into your project also (in an existing SASS file):

```
@import "~MODULE_NAME/src/styles";
```

### Include JavaScript in Webpack build
Add the following code to `webpack.config.js` to resolve an absolute path to where your component is located:

```javascript
const componentModulePath = fs.realpathSync(
  path.resolve(__dirname, 'node_modules', 'MODULE_NAME', 'src')
);
```

Then in the rule that transpiles code, include the path to your component:

```javascript
{
  test: /\.jsx?$/,
  use: ['babel-loader'],
  include: [
    path.resolve(__dirname, 'src'),
    componentModulePath
  ]
}
```

### Include SASS in Webpack build
Add another path to include in the rule for SCSS files:

```javascript
{
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: [
        path.resolve(__dirname, 'src'),
        componentModulePath
      ]
    }
  }]
}
```

