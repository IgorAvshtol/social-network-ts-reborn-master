import {ActionsTypes, PostsType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 1},
        {id: 2, message: "It's my first post", likesCount: 1},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                // message: action.newPostText,
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