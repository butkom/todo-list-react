import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createTasks from './reducers/tasks'

const store = createStore(createTasks);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
    type: 'ADD_TASK',
    payload: {
        content: 'task 3',
        checked: 0,
        updateInProgress: 0
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
