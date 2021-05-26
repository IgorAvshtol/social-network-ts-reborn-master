import {Dispatch} from "redux";
import {authAPI} from "../api/api";


let initialState = {
    userId: 0,
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



const authReducer = (state: UsersStateType = initialState, action: FollowedTypes): UsersStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


type FollowedTypes = ReturnType<typeof setAuthUserData>



const SET_USER_DATA = "SET-USER-DATA";



export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA, data:{id, email, login }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {   //ЕСЛИ ЗАЛОГИНЕНЫ, ТОГДА СЕТАЕМ resultCode === 0
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}




export default authReducer