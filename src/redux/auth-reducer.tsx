import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


let initialState = {
    userId: 10940,
    email: "",
    login: "",
    isAuth: false,
    password: "",
    rememberMe: false
}

type UsersStateType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean,
    password: string,
    rememberMe: boolean
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const authReducer = (state: UsersStateType = initialState, action: AuthActionType): UsersStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                // isAuth: true
            }
        default:
            return state
    }
}


export type AuthActionType = ReturnType<typeof setAuthUserData>


const SET_USER_DATA = "SET-USER-DATA";


export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA, data: {id, email, login, isAuth}
    } as const
}


export const getAuthUserData = (): any => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {   //ЕСЛИ ЗАЛОГИНЕНЫ, ТОГДА СЕТАЕМ resultCode === 0
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {   //ЕСЛИ ЗАЛОГИНЕНЫ, ТОГДА СЕТАЕМ resultCode === 0
                dispatch(getAuthUserData())   //после вводв логина и мейла заново диспатчим АС
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {   //ЕСЛИ ЗАЛОГИНЕНЫ, ТОГДА СЕТАЕМ resultCode === 0
                dispatch(setAuthUserData(0, "", "", false))   //обнуляем все значения и сетаем чтобы выйти из системы
            }
        })
    }
}


export default authReducer