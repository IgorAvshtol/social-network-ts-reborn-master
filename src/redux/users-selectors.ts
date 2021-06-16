import React from "react";
import {AppStateType} from "./redux-store";


export const getUserSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFatching = (state: AppStateType) => {
    return state.usersPage.isFatching
}

export const getFollowInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}