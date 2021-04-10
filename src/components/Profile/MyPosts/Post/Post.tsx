import React from 'react';
import s from './Post.module.css';


type PostType = {
    message: string
    likesCount: number

}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://images-na.ssl-images-amazon.com/images/I/61IkrxQ9p8L._AC_SL1500_.jpg'/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;