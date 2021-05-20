import React from 'react';
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {ComponentType} from "react";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStatePropsType> {

        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent

}
