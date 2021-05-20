import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUserProfile} from "../../redux/profile-reducer";

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
            // isAuth: state.auth.isAuth
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

export default compose<React.ComponentType>(                                              ///это вместо нижележащего
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)
//
//
// export default DialogsContainer