import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

//
// type MyDialogsType = {
//     // data: MessagePageType
//     // dispatch: (action: ActionsTypes) => void
//     // newMessageBody: string
//
//     store: ForReduxStoreType
//
//
// }
//
// const DialogsContainer = (props: MyDialogsType) => {
//
//     let state = props.store.getState()
//
//     const onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     const onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//
//     return <Dialogs updateNewMessageBody={onSendMessageClick}
//                     sendMessage={onNewMessageChange}
//                     messagePage={state.messagePage}
//         // newMessageBody={state.newMessageBody}
//         // data={props.data}
//         //             newMessageBody={state.messagePage.newMessageBody}
//         //             data={state.messagePage}
//     />
// }
    let mapStateToProps = (state: AppStateType) => {
        return {
            messagePage: state.messagePage,
            isAuth: state.auth.isAuth
        }
    }

    let mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            updateNewMessageBody: () => {
                dispatch(sendMessageCreator())
            },
            sendMessage: (body: string) => {
                dispatch(updateNewMessageBodyCreator(body))
            }
        }
    }
 const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)


export default DialogsContainer