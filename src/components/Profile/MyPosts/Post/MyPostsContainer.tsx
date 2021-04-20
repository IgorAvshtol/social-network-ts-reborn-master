import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ForReduxStoreType} from "../../../../redux/store";
import React, {ChangeEvent} from "react";
import MyPosts from "./MyPosts";


type MyPostsType = {
    // post: ProfilePageType
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void

    store: ForReduxStoreType
}


const MyPostsContainer = (props: MyPostsType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }


    return <MyPosts updateNewPostText={onPostChange}
                    post={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}/>
}

export default MyPostsContainer;