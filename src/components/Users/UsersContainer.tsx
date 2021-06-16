import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, FollowingProgressType, getUsers,
    setTotalUsersCount,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import loader from "./../../assets/images/loader.png"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowInProgress,
    getIsFatching,
    getPageSize,
    getTotalUsersCount,
    getUserSelector
} from "../../redux/users-selectors";


type UsersComponentType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    // setusers: (users: Array<UsersType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    // setCurrentPage: (currentPage: number) => void,
    isFatching: boolean,
    // toggleIsFatching: (isFatching: boolean) => void
    // toggleFollowingProgress: (isFatching: boolean, userId: number) => void
    followingInProgress: Array<FollowingProgressType>
    getUsers: (currentPage: number, pageSize: number) => void

}

class UsersСontainer extends React.Component<UsersComponentType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFatching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFatching(false)
        //     this.props.setusers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFatching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFatching(false)
        //     this.props.setusers(data.items)
        // })
    }

    render() {

        return <>
            {this.props.isFatching ? <img src={loader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFatching: getIsFatching(state),
        followingInProgress: getFollowInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setusers: (users: Array<UsersType>) => {
//             dispatch(setusersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFatching: (isFatching: boolean) => {
//             dispatch(toggleIsFatchingAC(isFatching))
//         }
//     }
// }

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setTotalUsersCount,
        getUsers
    }),
    withAuthRedirect
)(UsersСontainer)

// export default withAuthRedirect(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     // setusers,
//     // setCurrentPage,
//     setTotalUsersCount,
//     // toggleIsFatching,
//     // toggleFollowingProgress,
//     getUsers
// })(UsersСontainer))

// export default UsersContainer