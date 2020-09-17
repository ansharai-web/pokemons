import React from 'react'
import {Home} from './home/Home'
import {Provider} from 'react-redux';
import {rootReducers} from './reducers'
import {createStore} from 'redux';
const store= createStore(rootReducers)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    )
}

export default App
