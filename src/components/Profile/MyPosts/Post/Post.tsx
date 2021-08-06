import React, {createElement, useState} from 'react';
import s from './Post.module.css';
import {useDispatch} from "react-redux";
import {deletePostActionCreator} from "../../../../redux/profile-reducer";
import {Avatar, Button, Tooltip, Comment} from "antd";
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, CloseCircleOutlined} from '@ant-design/icons';


type PostType = {
    message: string
    likesCount: number
    id: number
}


const Post = (props: PostType) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState('');

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
        <Button shape="circle" icon={<CloseCircleOutlined/>} onClick={() => deletePost(props.id)}/>
    ];

    const dispatch = useDispatch()

    const deletePost = (id: number) => {
        dispatch(deletePostActionCreator(id))
    }

    return (
        <div className={s.item}>
            <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        {props.message}
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default Post;