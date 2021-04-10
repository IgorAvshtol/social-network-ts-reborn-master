import React from 'react';
import MyPosts from "../MyPosts/Post/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../../redux/state";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

type profileType = {
    profilePage: ProfilePageType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;