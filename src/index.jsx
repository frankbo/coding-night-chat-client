import './styles.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { init } from './socket/Messaging.js';

import App from './connecter/AppConnected.js';
import appReducer from './reducers/index.js';

const store = createStore(appReducer);
init(store);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
