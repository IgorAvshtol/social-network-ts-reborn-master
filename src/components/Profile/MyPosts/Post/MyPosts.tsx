import Post from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePageType} from "../../../../redux/store";
import s from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../../redux/store";


type MyPostsType = {
    post: ProfilePageType
    newPostText: string
    dispatch?: (action: ActionsTypes) => void
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.post.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>
    )


    const addPost = () => {
        // props.dispatch(addPostActionCreator(props.newPostText))
    }
    //
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     // props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    //     props.updateNewPostText(e.currentTarget.value)
    // }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={props.updateNewPostText} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={()=>props.addPost()}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;