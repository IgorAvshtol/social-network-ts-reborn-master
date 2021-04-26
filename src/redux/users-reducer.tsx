let initialState = {
    users: []
}

export type UsersStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number,
    photos: {
        small: string,
        large: string
    },
    followed: boolean,
    name: string,
    status: string,
    location: LocationUsersType
}

export type LocationUsersType = {
    city: string,
    country: string
}

const usersReducer = (state: UsersStateType = initialState, action: FollowedTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


type FollowedTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setusersAC>


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setusersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, users
    } as const
}


export default usersReducer