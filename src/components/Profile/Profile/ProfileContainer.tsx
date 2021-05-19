import React from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type ProfileContainerType = {
    profile: ProfileType
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID: string) => void
}

export type MapStatePropsType = {
    profile: ProfileType
}

export type PathParamsType = {
    userId: string | undefined
}

type OwnPropsType = ProfileContainerType
type OwnProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<OwnProfileContainerType> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {

        return <>

            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// const UsersContainer = connect(mapStateToProps, { setUserProfile})(UsersСontainer)


export default connect(mapStateToProps,
    // {setUserProfile},
    {getUserProfile})(WithUrlDataContainerComponent)