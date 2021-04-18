import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/store";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes} from "./redux/store";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void

}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs data={props.state.messagePage}
                                                                  dispatch={props.dispatch}
                                                                  newMessageBody={props.state.messagePage.newMessageBody}/>}/>

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
