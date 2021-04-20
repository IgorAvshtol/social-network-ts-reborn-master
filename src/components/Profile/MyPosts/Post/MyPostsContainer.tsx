import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ActionsTypes, ForReduxStoreType, RootStateType} from "../../../../redux/store";
import React, {ChangeEvent} from "react";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/message-reducer";
import {connect} from "react-redux";
import Dialogs from "../../../Dialogs/Dialogs";
import {Dispatch} from "redux";

//
// type MyPostsType = {
//     // post: ProfilePageType
//     // newPostText: string
//     // dispatch: (action: ActionsTypes) => void
//
//     store: ForReduxStoreType
// }
//
//
// const MyPostsContainer = (props: MyPostsType) => {
//
//     let state = props.store.getState()
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
//     }
//
//
//     return <MyPosts updateNewPostText={onPostChange}
//                     post={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                     addPost={addPost}/>
// }
let mapStateToProps = (state: RootStateType) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;