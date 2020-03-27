import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './modules/rootReducer';
import { cardMiddleware, authMiddleware, registerMiddleware } from './modules/middleware';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(cardMiddleware),
      applyMiddleware(authMiddleware),
      applyMiddleware(registerMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop,
    ),
  );
  return store;
};

export default createAppStore;
