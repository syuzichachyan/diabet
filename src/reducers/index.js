import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes-reducer';

export default combineReducers({
    recipes,
    isRecipesFetching
});
