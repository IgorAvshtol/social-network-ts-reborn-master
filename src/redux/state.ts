import {ChangeEvent} from "react";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type MessagePageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// export type AddPostActionType = {
//     type: "ADD-POST"
//     newPostText: string
// }

// export type ChangeNewTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     newText: string
// }
//
// type AddPostActionType = ReturnType<typeof addPostActionCreator>
// type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const

}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 1},
                {id: 2, message: "It's my first post", likesCount: 1},
            ],
            newPostText: ""
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Make America Great Again'},
                {id: 2, message: 'Show your gun'},
                {id: 3, message: 'Are you gansters?'},
            ],
            dialogs: [
                {id: 1, name: 'Trump'},
                {id: 2, name: 'Biden'},
                {id: 4, name: 'Bush'},
                {id: 3, name: 'Abama'},
            ],
            newMessageBody: ""
        }
    },
    _rerenderEntireTree() {
        console.log('State CHANGED')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer

    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    addPost(newPostText: string) {
        let newPost: PostsType = {
            id: 5,
            message: newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree()
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._rerenderEntireTree()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        }
    }
}

// export let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you', likesCount: 1},
//             {id: 2, message: "It's my first post", likesCount: 1},
//         ],
//         newPostText: ""
//     },
//     messagePage: {
//         messages: [
//             {id: 1, message: 'Make America Great Again'},
//             {id: 2, message: 'Show your gun'},
//             {id: 3, message: 'Are you gansters?'},
//         ],
//         dialogs: [
//             {id: 1, name: 'Trump'},
//             {id: 2, name: 'Biden'},
//             {id: 4, name: 'Bush'},
//             {id: 3, name: 'Abama'},
//         ]
//     }
// }

// export let addPost = () => {
//     let newPost: PostsType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree()
// }

// export let updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }

// let rerenderEntireTree = () => {
//     console.log('State CHANGED')
// }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
//
// }

export default store