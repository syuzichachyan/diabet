import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import Recipes from './containers/recipes';
const store = createStore(rootReducer,{recipes:null,
    isRecipesFetching:null}, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
//for rehearsal
const includes = ["fish"];
const excludes = ["chicken"];
ReactDOM.render(
    <Provider store={store}>
        <Recipes includes={includes} excludes={excludes}/>
    </Provider>,
    document.getElementById('root'));