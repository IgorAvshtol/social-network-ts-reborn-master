import React from 'react';
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, ProfileType, updateStatus} from "../../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfileContainerType = {
    profile: ProfileType
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID: number) => void
    isAuth: boolean
    getUserStatus: (userID: number) => void
    updateStatus: (status: string) => void
    status: string
    autorizedUserID: number

}

export type MapStatePropsType = {
    profile: ProfileType
    // userStatus: string
    status: string
    autorizedUserID: number
}

export type PathParamsType = {
    userId:  any
}

export type OwnPropsType = ProfileContainerType
export type OwnProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<OwnProfileContainerType> {


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserID
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {

        // if (!this.props.isAuth) return <Redirect to={"/login"}/>     //(this.props.isAuth===false)
        // если не залогинены - попадаем на страницу /login
        return <>

            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}/>
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserID: state.auth.userId

})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateStatus}),
    // withAuthRedirect,
    withRouter
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// // const UsersContainer = connect(mapStateToProps, { setUserProfile})(UsersСontainer)
//
// export default withAuthRedirect(connect(mapStateToProps,
//     // {setUserProfile},
//     {getUserProfile})(WithUrlDataContainerComponent))
//
// // export default connect(mapStateToProps,
// //     // {setUserProfile},
// //     {getUserProfile})(WithUrlDataContainerComponent)