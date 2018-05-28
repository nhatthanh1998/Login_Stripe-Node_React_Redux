import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk'
import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore)
ReactDOM.render(
<Provider store={createStoreWithMiddleWare(rootReducer)}><App/>
</Provider>
,document.getElementById('root'))