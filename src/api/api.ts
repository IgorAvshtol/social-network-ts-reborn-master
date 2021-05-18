import axios from "axios";
import {getUsers} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "38c3a417-44c2-476d-ad1b-ea982c1c54f6"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)

    },
    unfollow(userID: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)

    },
    auth() {
        return instance.get(`auth/me`)
            }
}


//староееееееееее
// export const getUsers = (currentPage = 1, pageSize = 10) => {
//    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true
//         })
//         .then(response => {
//             return response.data
//         })
// }
