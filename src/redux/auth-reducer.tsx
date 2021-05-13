let initialState = {
    id: 0,
    email: "",
    login: ""
}

type UsersStateType = {
    id: number,
    email: string,
    login: string
}



const authReducer = (state: UsersStateType = initialState, action: FollowedTypes): UsersStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


type FollowedTypes = ReturnType<typeof setUserData>



const SET_USER_DATA = "SET-USER-DATA";



export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA, data:{id, email, login}
    } as const
}


export default authReducer