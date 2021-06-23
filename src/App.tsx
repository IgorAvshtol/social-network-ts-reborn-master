import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/Common/Preloader";
import {withSuspense} from "./hoc/withSuspense";
// import UsersСontainerFC from "./components/Users/UserContainerFC";


type getUserAppType = {
    initializeApp: () => void
    initialized: boolean
}

const UsersContainerFC = React.lazy(()=> import ("./components/Users/UserContainerFC"));

class App extends React.Component<getUserAppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainerFC)}/>

                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect ( mapStateToProps, {initializeApp}) (App)
