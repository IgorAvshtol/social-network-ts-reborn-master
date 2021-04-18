import React from 'react';
import MyPosts from "../MyPosts/Post/MyPosts";
import {ProfilePageType} from "../../../redux/store";
import {ActionsTypes} from "../../../redux/store";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";

type profileType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer post={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;