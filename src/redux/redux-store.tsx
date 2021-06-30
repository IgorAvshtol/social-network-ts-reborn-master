import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileReducersActionsTypes} from "./profile-reducer";
import messageReducer, {MessageReducerActionsTypes} from "./message-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof reducers>

export type AppActionType = AuthActionType | MessageReducerActionsTypes | ProfileReducersActionsTypes | UsersActionType // все экшны приложения

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store