import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


let initialState = {
    initialized: false

}

type UsersStateType = {
    initialized: boolean
}


const appReducer = (state: UsersStateType = initialState, action: AuthActionType): UsersStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export type AuthActionType = ReturnType<typeof initializedSuccess>


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}


export const initializeApp = () => (dispatch: Dispatch) => {
   let promise = dispatch (getAuthUserData())
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess())
    })
}



export default appReducer