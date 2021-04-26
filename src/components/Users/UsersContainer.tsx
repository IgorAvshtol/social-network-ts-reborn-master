import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setusersAC, unfollowAC, UsersType} from "../../redux/users-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (users: Array<UsersType>) => {
            dispatch(setusersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer