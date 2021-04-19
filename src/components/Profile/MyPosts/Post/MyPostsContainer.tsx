import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePageType, StoreType} from "../../../../redux/store";
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsType = {
    post: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void

    // store: StoreType
}


const MyPostsContainer = (props: MyPostsType) => {

    // let postsElement = props.post.posts.map(p =>
    //     <Post message={p.message} likesCount={p.likesCount}/>
    //

    // let state = props.store.getState()




    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        // props.updateNewPostText(e.currentTarget.value)
    }


    return <MyPosts updateNewPostText={onPostChange}
                    // post={state.profilePage.posts}
                    // newPostText={state.profilePage.newPostText}
                    newPostText={props.newPostText}
                    post={props.post}
                    addPost={addPost}/>
}

export default MyPostsContainer;