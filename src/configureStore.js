import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import createRootReducer from './reducers';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        createPromise(),
        thunk,
        logger,
      ),
    ),
  );

  return store;
}
