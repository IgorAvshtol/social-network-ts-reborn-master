import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import messageReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./message-reducer";

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
    sidebar?: string
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

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const store: StoreType = {
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
        },
        sidebar: ""
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._rerenderEntireTree()


        // if (action.type === "ADD-POST") {
        //     let newPost: PostsType = {
        //         id: 5,
        //         message: action.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ""
        //     this._rerenderEntireTree()
        // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.newText
        //     this._rerenderEntireTree()
        // } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        //     this._state.messagePage.newMessageBody = action.body
        //     this._rerenderEntireTree()
        // } else if (action.type === "SEND-MESSAGE") {
        //     let body = this._state.messagePage.newMessageBody
        //     this._state.messagePage.newMessageBody = ""
        //     this._state.messagePage.messages.push({id: 6, message: body})
        //     this._rerenderEntireTree()
        // }
    }
}


export default store