import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "./StoreContext";
import {Provider} from "react-redux";



    ReactDOM.render(
        <BrowserRouter>
            <Provider  store={store}>
            <App   />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


// rerenderEntireTree()

//перерисуем всё дерево
// store.subscribe(rerenderEntireTree)
//
