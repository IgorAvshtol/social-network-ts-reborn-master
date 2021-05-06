import React from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";

export type ProfileContainerType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

export type MapStatePropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response)
                this.props.setUserProfile(response.data)
            })
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

// const UsersContainer = connect(mapStateToProps, { setUserProfile})(UsersСontainer)


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)