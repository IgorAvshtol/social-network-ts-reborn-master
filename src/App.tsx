import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {ForReduxStoreType, RootStateType, StoreType} from "./redux/store";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {AppStateType} from "./redux/redux-store";

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
                    <Route path='/dialogs' render={() => <DialogsContainer
                        // store={props.store}
                        // data={props.state.messagePage}
                        // dispatch={props.dispatch}
                        // newMessageBody={props.state.messagePage.newMessageBody}


                    />}/>

                    <Route path='/profile'
                           render={() => <Profile
                               // store={props.store}
                               // profilePage={props.state.profilePage}
                               // dispatch={props.dispatch}
                               // newPostText={props.state.profilePage.newPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
