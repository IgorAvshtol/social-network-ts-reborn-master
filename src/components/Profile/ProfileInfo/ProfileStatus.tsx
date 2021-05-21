import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'


type ProfileStatusType = {
    userStatus: string
    updateStatus: (status: string) => void
}


const ProfileStatus = (props: ProfileStatusType) => {

    let startStatus = props.userStatus


    let [newstatus, setNewStatus] = useState(props.userStatus)
    let [editMode, setEditMode] = useState(false)



    const onClickChangeStatus = () => {
        setEditMode(true)
    }
 
    const afterChangeStatus = () => {
        setEditMode(false)
        props.updateStatus(newstatus)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }



    return (<div>
            {!editMode &&
            <div>
                <span onClick={onClickChangeStatus}>{props.userStatus}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onChangeStatus}
                       autoFocus={true}
                       onBlur={afterChangeStatus}
                       value={newstatus}/>
            </div>
            }

        </div>
    )
}

export default ProfileStatus;