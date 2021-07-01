import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileComponentType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean

}

const Profile = (props: ProfileComponentType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;