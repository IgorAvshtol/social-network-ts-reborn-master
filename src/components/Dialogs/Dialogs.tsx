import React from "react";
import s from "./Dialogs.module.css"
import {MessagePageType} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type stateType = {
    data: MessagePageType

}

const Dialogs = (props: stateType) => {


    let dialogElements = props.data.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )


    let messageElement = props.data.messages.map(message =>
        <Message message={message.message}/>
    )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElement}

            </div>
        </div>
    )
}


export default Dialogs