import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


type AppType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    // store: AppStateType
    // store: ForReduxStoreType

}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/users'
                           render={() => <Users/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
