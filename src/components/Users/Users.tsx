import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUserSelector
} from "../../redux/users-selectors";
import {follow, unfollow} from "../../redux/users-reducer";


type UsersFunctionalType = {
    // users: Array<UsersType>,
    // pageSize: number,
    // currentPage: number,
    // totalUsersCount: number,
    // follow: (userId: number) => void,
    // unfollow: (userId: number) => void,
    onPageChanged: (p: number) => void
    // followingInProgress: Array<FollowingProgressType>
    // toggleFollowingProgress: (isFatching: boolean, userId: number) => void
}

let Users = (props: UsersFunctionalType) => {

    //
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = []
    //
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    const users = useSelector(getUserSelector)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowInProgress)

    const dispatch = useDispatch()

    const Follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const Unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }


    return <div>
        <Paginator pageSize={pageSize} currentPage={currentPage} totalUsersCount={totalUsersCount} onPageChanged={props.onPageChanged}/>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                Unfollow(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // usersAPI.unfollow(u.id)
                                // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                // //     withCredentials: true,
                                // //     headers: {
                                // //         "API-KEY": "38c3a417-44c2-476d-ad1b-ea982c1c54f6"
                                // //     }
                                // // })
                                //     .then(response => {
                                //         if (response.data.resultCode == 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                Follow(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // usersAPI.follow(u.id)
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         "API-KEY": "38c3a417-44c2-476d-ad1b-ea982c1c54f6"
                                //     }
                                // })
                                //     .then(response => {
                                //         if (response.data.resultCode == 0) {
                                //             props.follow(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div><div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
        <button>More</button>
    </div>

}




export default Users

