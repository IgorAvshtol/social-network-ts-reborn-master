import Post from "./Post";
import {PostsType} from "../../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import  {Field,InjectedFormProps, reduxForm} from "redux-form";


type MyPostsType = {
    post: Array<PostsType>
    // newPostText: string
    addPost: (newPostText: string) => void
    // addPost: () => void
    // updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type PostFormType = {
    newPostText: string
}




const MyPosts = (props: MyPostsType) => {


    let postsElement = props.post.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>
    )

    //
    // const addPostСhange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewPostText(e)
    // }

    const onAddPost = (value: PostFormType) => {
        props.addPost(value.newPostText)
    }
    //
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     // props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    //     props.updateNewPostText(e.currentTarget.value)
    // }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPost onSubmit={onAddPost}/>
            {/*<div>*/}
            {/*    <textarea onChange={addPostСhange} value={props.newPostText}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onAddPost}>Add post</button>*/}
            {/*</div>*/}
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPost = reduxForm<PostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)



export default MyPosts;