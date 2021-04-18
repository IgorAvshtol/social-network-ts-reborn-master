import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/store";
import {ActionsTypes} from "../../redux/store";


type stateType = {
    data: MessagePageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string

}

const Dialogs = (props: stateType) => {


    let dialogElements = props.data.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )


    let messageElement = props.data.messages.map(message =>
        <Message message={message.message}/>
    )

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(props.newMessageBody))
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea placeholder="Enter your message" onChange={onNewMessageChange}
                                   value={props.newMessageBody}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default Dialogs