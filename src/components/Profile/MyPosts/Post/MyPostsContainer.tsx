import {addPostActionCreator} from "../../../../redux/profile-reducer";
import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../redux/redux-store";

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
let mapStateToProps = (state: AppStateType) => {
    return {
        post: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;