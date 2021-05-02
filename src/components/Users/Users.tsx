import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import React from "react";
import {UsersType} from "../../redux/users-reducer";

type UsersFunctionalType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (p: number) => void
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
                    return <span className={styles.selectedPage} onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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