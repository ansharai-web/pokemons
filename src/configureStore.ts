import { createStore, applyMiddleware } from "redux";
import {rootReducers} from './reducers';
import thunkMiddleware from 'redux-thunk';

export const configureStore = () => {
    const thunk = applyMiddleware(thunkMiddleware);
    const store = createStore(rootReducers,thunk );

    return store
}
