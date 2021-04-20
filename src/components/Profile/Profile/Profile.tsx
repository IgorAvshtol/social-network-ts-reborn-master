import React from 'react';
import {ForReduxStoreType, RootStateType} from "../../../redux/store";
import {ProfilePageType} from "../../../redux/store";
import {ActionsTypes} from "../../../redux/store";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";
import store from "../../../redux/redux-store";


type profileType = {
    // profilePage: ProfilePageType
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    // store: ForReduxStoreType



}


const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={store}
                // post={props.profilePage}
                // dispatch={props.dispatch}
                // newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;