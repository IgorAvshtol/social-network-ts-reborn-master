import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType} from "./redux/state";
import Dialogs from "./components/Dialogs/Dialogs";

type AppType = {
    state: RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs data={props.state.messagePage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}
                                                  newPostText={props.state.profilePage.newPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
