import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = () =>
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}  dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );


rerenderEntireTree()

store.subscribe(rerenderEntireTree)

