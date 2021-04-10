import Post from "./Post";
import {
    ActionsTypes,
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../../redux/state";
import s from './MyPosts.module.css';
import React, {ChangeEvent} from "react";


type MyPostsType = {
    post: ProfilePageType
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsType) => {

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


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;