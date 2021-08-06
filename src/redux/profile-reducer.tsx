import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'You are real samurai!!', likesCount: 1},
        {id: 2, message: "It's my second post", likesCount: 1},
    ],
    // newPostText: "",
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        aboutMe: "",
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
    profile: ProfileType
    status: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
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
            }
        case "DELETE-POST":
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.id)],
            }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status,
            }
        }
        case "SET-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}


const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SET_PHOTO_SUCCESS = "SET-PHOTO-SUCCESS"

export type ProfileReducersActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof deletePostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setPhotoSuccess>


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}

export const deletePostActionCreator = (id: number) => {
    return {
        type: DELETE_POST, id
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

export const setPhotoSuccess = (photos: any) => {
    return {
        type: SET_PHOTO_SUCCESS,
        photos
    } as const
}

export const getUserProfile = (userID: number) => {
    return async (dispatch: Dispatch) => {
        let response = await usersAPI.getProfile(userID) //Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
        if (response.status === 200) {
            dispatch(setUserProfile(response.data))
        }
    }
}

// export const getUserProfile = (userID: number) => {
//     return (dispatch: Dispatch) => {
//         usersAPI.getProfile(userID).then(response => {
//             if (response.status === 200) {
//                 dispatch(setUserProfile(response.data))
//             }
//         })
//     }
// }

export const getUserStatus = (userID: number) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getStatus(userID)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const updateAvatar = (photos: any) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.updateAvatar(photos)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile: any) => {
    return async (dispatch: Dispatch<any>, getState: any) => {
        // const userId = useSelector<AppStateType, any>(state => state.auth.userId)
        const userId = getState().auth.userId
        let response = await profileAPI.saveProfile(profile)
        console.log(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        }
    }
}

export default profileReducer