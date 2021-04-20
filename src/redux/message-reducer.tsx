import {MessagePageType} from "./store";
import {ActionsTypes} from "./store";

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

const messageReducer = (state: MessagePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy;
        case "SEND-MESSAGE": {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.messages = {...state.messages}
            stateCopy.messages.push({id: 6, message: body})
            stateCopy.newMessageBody = ""
            return stateCopy
        }
        default:
            return state
    }

}

export default messageReducer


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


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
