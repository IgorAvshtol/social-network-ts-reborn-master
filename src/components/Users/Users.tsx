import React from 'react';
import  styles from './users.module.css';
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/users.jpg'


type UsersComponentType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setusers: (users: Array<UsersType>) => void
}

class Users extends React.Component<UsersComponentType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setusers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className={styles.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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
                <button >More</button>
            </div>
        )
    }
}

export default Users;