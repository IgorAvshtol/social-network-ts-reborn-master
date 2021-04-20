import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers)
export default store