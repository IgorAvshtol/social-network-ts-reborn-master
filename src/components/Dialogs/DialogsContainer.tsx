import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/store";
import {ActionsTypes} from "../../redux/store";
import Dialogs from "./Dialogs";


type stateType = {
    data: MessagePageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string

}

const DialogsContainer = (props: stateType) => {



    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }


    return <Dialogs onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}
                    newMessageBody={props.newMessageBody}
                    data={props.data}
    />
}


export default DialogsContainer