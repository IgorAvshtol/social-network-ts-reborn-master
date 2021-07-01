import axios from "axios";

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
        return instance.post(`follow/${userID}`)

    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`)

    },
    getProfile(userID: number) {                                          //Сделали так чтобы не переименовывать везде
        console.warn("Obsolet method.Please, use profileAPI")
        return profileAPI.getProfile(userID)
    }

}

export const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})  //потому что запрос "put" передаём body = тексту status
    },
    updateAvatar(photo: any) {
        let formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile)
        console.log(profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
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
