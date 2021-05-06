import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";
import {MapStatePropsType} from "./ProfileContainer";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileComponentType = {
    profile: ProfileType
}

const Profile = (props: ProfileComponentType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;