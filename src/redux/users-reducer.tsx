let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1,  ///cо старта будет страница номер 1
    isFatching: true,
    followingInProgress: []
}

export type UsersStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFatching: boolean,
    followingInProgress: Array<FollowingProgressType>
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

export type FollowingProgressType = {}

const usersReducer = (state: UsersStateType = initialState, action: FollowedTypes): UsersStateType => {
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
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFatching: action.isFatching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFatching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}


type FollowedTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setusers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFatching>
    | ReturnType<typeof toggleFollowingProgress>


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USER_TOTAL_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


export const follow = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setusers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_USER_TOTAL_COUNT, totalUsersCount
    } as const
}

export const toggleIsFatching = (isFatching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFatching
    } as const
}

export const toggleFollowingProgress = (isFatching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFatching, userId
    } as const
}

export default usersReducer