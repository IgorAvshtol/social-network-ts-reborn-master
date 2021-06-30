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
    ]
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
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar?: string
}

const messageReducer = (state: MessagePageType = initialState, action: MessageReducerActionsTypes) => {


    switch (action.type) {
        case "SEND-MESSAGE": {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }

}

export default messageReducer


const SEND_MESSAGE = "SEND-MESSAGE";


export type MessageReducerActionsTypes =
    ReturnType<typeof sendMessageCreator>


export const sendMessageCreator = (newMessageBody: string) => {
    console.log(newMessageBody);
    return {
        type: SEND_MESSAGE, newMessageBody

    } as const
}

