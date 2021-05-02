import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import Users from './Users';


type UsersComponentType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setusers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersAPIComponent extends React.Component<UsersComponentType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)
            })
    }

    render() {

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />

    }
}

export default UsersAPIComponent;