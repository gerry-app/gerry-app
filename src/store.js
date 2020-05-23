import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import createRootReducer from './reducers';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';

// import routerMiddleware from 'react-router-redux/middleware';
// import appHistory from "tools/appHistory";
// import { composeWithDevTools } from 'redux-devtools-extension';

/*const middleware =
  process.env.NODE_ENV == "production"
    ? applyMiddleware(
        promise(),
        thunk,
        localizer,
        routerMiddleware(appHistory), //for intercepting navigation actions
      )
    : composeWithDevTools(
        applyMiddleware(
          promise(),
          thunk,
          logger,
          localizer,
          routerMiddleware(appHistory),
        ),
      );*/

export const history = createBrowserHistory();

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
