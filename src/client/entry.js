import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import App from './containers/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, document.getElementById('root'))
};

if (process.env.NODE_ENV !== 'production') {
    console.log('[entry.js] Looks like we are in development mode!');
} else {
    console.log('[entry.js] Looks like we are in prod mode!');
}

render(App);

if (module.hot) {
  module
    .hot
    .accept('./containers/App', () => {
      render(App)
    })
}
