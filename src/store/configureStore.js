import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
const initialState = {
    recipes: null,
    isRecipesFetching: null
};
const store =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, initialState, applyMiddleware(thunk))
        : createStore(
              rootReducer,
              initialState,
              compose(
                  applyMiddleware(thunk),
                  window.__REDUX_DEVTOOLS_EXTENSION__ &&
                      window.__REDUX_DEVTOOLS_EXTENSION__()
              )
          );
store.subscribe(() => console.log(store.getState()));
export default store;
