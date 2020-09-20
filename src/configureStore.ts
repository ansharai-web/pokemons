import { createStore, applyMiddleware, compose } from "redux";
import {rootReducers} from './reducers';
import thunkMiddleware from 'redux-thunk';

export const configureStore = () => {
    const thunk = applyMiddleware(thunkMiddleware);

    // MUST BE USED IN TEST BUILD
    const reduxDevToolExtensionComposeConfiguration = process.env.NODE_ENV === 'development' ? {} : Object.freeze({
        features: {
            pause: false, // start/pause recording of dispatched actions
            lock: false, // lock/unlock dispatching actions and side effects
            persist: false, // persist states on page reloading
            export: true, // export history of actions in a file
            import: false, // import history of actions from a file
            jump: false, // jump back and forth (time travelling)
            skip: false, // skip (cancel) actions
            reorder: false, // drag and drop actions in the history list
            dispatch: false, // dispatch custom actions or action creators
            test: true // generate tests for the selected actions
        }
    })

    /**
     * REDUX DEVTOOLS
     */
    const composeEnhancers = typeof (window as any) === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(reduxDevToolExtensionComposeConfiguration) : compose

    // return store
    return createStore(rootReducers,composeEnhancers(thunk));

}
