import {ProfilePageType} from "./profile-reducer";

let initialState = {
    messages: [
        {id: 1, message: 'Make America Great Again'},
        {id: 2, message: 'Show your gun'},
        {id: 3, message: 'Are you gansters?'},
    ],
    dialogs: [
        {id: 1, name: 'Trump'},
        {id: 2, name: 'Biden'},
        {id: 4, name: 'Bush'},
        {id: 3, name: 'Abama'},
    ],
    newMessageBody: ""
}

type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}


export type MessagePageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar?: string
}

const messageReducer = (state: MessagePageType = initialState, action: MessageReducerActionsTypes) => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            }

        case "SEND-MESSAGE": {
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ""
            }
        }
        default:
            return state
    }

}

export default messageReducer


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


export type MessageReducerActionsTypes =
    ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
        // newMessageBody: newMessageBody

    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}


// const messageReducer = (state: MessagePageType, action: ActionsTypes) => {
//     if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
//         state.newMessageBody = action.body
//     } else if (action.type === "SEND-MESSAGE") {
//         let body = state.newMessageBody
//         state.newMessageBody = ""
//         state.messages.push({id: 6, message: body})
//     }
//
//     return state
//
// }
