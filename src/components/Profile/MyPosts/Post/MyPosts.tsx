import Post from "./Post";
import {PostsType} from "../../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import React, {ChangeEvent} from "react";


type MyPostsType = {
    post: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.post.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>
    )


    const addPostСhange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e)
    }

    const onAddPost = () => {
        props.addPost()
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
                <textarea onChange={addPostСhange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;