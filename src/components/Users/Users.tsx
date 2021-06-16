import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import React from "react";
import {FollowingProgressType, getUsers, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type UsersFunctionalType = {
    users: Array<UsersType>,
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (p: number) => void
    followingInProgress: Array<FollowingProgressType>
    // toggleFollowingProgress: (isFatching: boolean, userId: number) => void
}

let Users = (props: UsersFunctionalType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.nothing } onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                               props.unfollow(u.id)
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
                            : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                props.follow(u.id)
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