import React from 'react';
import ReactDOM from 'react-dom';
import RoutingApp from './RoutingApp';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

// for onClick events with MUI/React
// try {
// injectTapEventPlugin();
// } catch (err) {
/* hot reloading, no issue  */
// }

const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RoutingApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
