import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
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



function UsersСontainerFC (props: UsersComponentType) {

    useEffect(()=>{
        props.getUsers(props.currentPage, props.pageSize)
    },[])
    // componentDidMount() {
    //    props.getUsers(props.currentPage, props.pageSize)
    // }

   let onPageChanged = (pageNumber: number) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    let users= useSelector<AppStateType>(state => state.usersPage.users, )

        return <>
            {props.isFatching ? <img src={loader}/> : null}
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   users={props.users}
                   follow={props.follow}
                   unfollow={props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={props.followingInProgress}
            />
        </>
    }



// let value = useSelector<AppStateType, number>(state => state.counter.value)

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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setTotalUsersCount,
        getUsers
    }),
    withAuthRedirect
)(UsersСontainerFC)
