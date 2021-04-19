import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ForReduxStoreType, MessagePageType, StoreType} from "../../redux/store";
import {ActionsTypes} from "../../redux/store";
import Dialogs from "./Dialogs";


type MyDialogsType = {
    // data: MessagePageType
    // dispatch: (action: ActionsTypes) => void
    // newMessageBody: string

    store: ForReduxStoreType



}

const DialogsContainer = (props: MyDialogsType) => {

let state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return <Dialogs onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}
                    // newMessageBody={state.newMessageBody}
                    // data={props.data}
                    newMessageBody={state.messagePage.newMessageBody}
                    data={state.messagePage}
    />
}


export default DialogsContainer