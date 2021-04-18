import Post from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePageType} from "../../../../redux/store";
import s from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsType = {
    post: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPostsContainer = (props: MyPostsType) => {

    let postsElement = props.post.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>
    )


    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        // props.updateNewPostText(e.currentTarget.value)
    }


    return <MyPosts updateNewPostText={onPostChange}
                    newPostText={props.newPostText}
                    post={props.post}
                    addPost={addPost}/>
}

export default MyPostsContainer;