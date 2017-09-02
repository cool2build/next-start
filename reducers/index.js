import prompts from './prompts';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from '../lib/thunk-middleware';

export default combineReducers({
  prompts
});

export const initStore = (reducer, is = {}, isServer) => {
  const initialState = {
    ...{},
    prompts: prompts()
  };

  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
  } else {
    if (!window.store) {
      window.store = createStore(
        reducer,
        initialState,
        compose(
          applyMiddleware(thunkMiddleware),
          window.devToolsExtension
            ? window.devToolsExtension({
              actionsBlacklist: ['LOAD_ALERTS', 'LOAD_ALERTS_SUCCESS']
            })
            : f => f
        )
      );
    }
    return window.store;
  }
};
