import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";


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