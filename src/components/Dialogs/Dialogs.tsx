import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType, RootStateType} from "../../redux/store";



type MyDialogsType = {
    updateNewMessageBody: () => void
    sendMessage: (body: string) => void
    messagePage: MessagePageType
    // newMessageBody: string
    // data: MessagePageType

}

const Dialogs = (props: MyDialogsType) => {




    let dialogElements = props.messagePage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    )


    let messageElement = props.messagePage.messages.map(message =>
        <Message message={message.message} key={message.id}/>
    )

    const onSendMessageClick = () => {
        props.updateNewMessageBody()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.sendMessage(e.currentTarget.value)
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
                                   value={props.messagePage.newMessageBody}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default Dialogs