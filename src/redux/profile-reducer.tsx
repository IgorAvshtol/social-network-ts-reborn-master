import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 1},
        {id: 2, message: "It's my first post", likesCount: 1},
    ],
    // newPostText: "",
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: ""
        }
    },
    status: ""

}

export type PostsType = {
    id: number
    message: any
    likesCount: number
}


export type ProfilePageType = {
    posts: Array<PostsType>
    // newPostText: string
    profile: ProfileType
    status: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ""
            }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile,
            }
        }
        case "SET-STATUS": {
            return {
                ...state, status: action.status,
            }
        }
        default:
            return state
    }
}


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

export type ProfileReducersActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}


export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


export const getUserProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userID).then(response => {
            if (response.status === 200) {
                dispatch(setUserProfile(response.data))
            }
        })
    }
}

export const getUserStatus = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setStatus(response.data))
            console.log(response.data)
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
                console.log(status);
            }
        })
    }
}

export default profileReducer