import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/message-reducer";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";


type MyDialogsType = {
    updateNewMessageBody: (onNewMessageBody: string) => void
    messagePage: MessagePageType

}

export type DialogsFormType = {
    onNewMessageBody: string
}

const AddMessageFormRedux = reduxForm<DialogsFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props: MyDialogsType) => {


    let dialogElements = props.messagePage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    )


    let messageElement = props.messagePage.messages.map(message =>
        <Message message={message.message} key={message.id}/>
    )


    const addNewMessage = (value: DialogsFormType) => {
        props.updateNewMessageBody(value.onNewMessageBody)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                {/*<div>*/}
                {/*    <div><textarea placeholder="Enter your message" onChange={onNewMessageChange}*/}
                {/*                   value={onNewMessageBody}/></div>*/}
                {/*    <div>*/}
                {/*        <button onClick={onSendMessageClick}>Send</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}


export default Dialogs