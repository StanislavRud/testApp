import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(
    {
        form: formReducer,
    },
    composeWithDevTools(applyMiddleware())
);

const store = createStore(rootReducer);

export default store;
