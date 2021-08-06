import Post from "./Post";
import {PostsType} from "../../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../../../utilits/validators/validators";
import {Button} from "antd";


type MyPostsType = {
    post: Array<PostsType>
    addPost: (newPostText: string) => void

}

export type PostFormType = {
    newPostText: string
}

const maxLength10 = maxLenghtCreator(10)

const MyPosts = (props: MyPostsType) => {


    let postsElement = props.post.map(p =>
        <Post message={p.message} likesCount={p.likesCount} id={p.id}/>
    )


    const onAddPost = (value: PostFormType) => {
        props.addPost(value.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPost onSubmit={onAddPost}/>
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
                <Field name={"newPostText"} component={Textarea} placeholder={"enter new post"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Button>Add post</Button>
            </div>
        </form>
    )
}

const AddNewPost = reduxForm<PostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;