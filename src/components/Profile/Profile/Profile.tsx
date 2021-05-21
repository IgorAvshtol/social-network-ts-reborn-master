import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";
import {MapStatePropsType} from "./ProfileContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type ProfileComponentType = {
    profile: ProfileType
    userStatus: string
    updateStatus: (status: string) => void

}

const Profile = (props: ProfileComponentType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;