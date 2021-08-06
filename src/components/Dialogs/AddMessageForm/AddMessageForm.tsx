import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utilits/validators/validators";
import {DialogsFormType} from "../Dialogs";
import {Button} from "antd";

export const AddMessageForm: React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"onNewMessageBody"} component={Textarea}
                       validate={[required]}/>
            </div>
            <div>
                <Button>Send</Button>
            </div>
        </form>
    </div>
}