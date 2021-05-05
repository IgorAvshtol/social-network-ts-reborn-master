let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 1},
        {id: 2, message: "It's my first post", likesCount: 1},
    ],
    newPostText: ""
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileReducersActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
        // newPostText: ""
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}


export default profileReducer