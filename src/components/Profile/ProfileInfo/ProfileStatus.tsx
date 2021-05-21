import React, {useState} from 'react'


type ProfileStatusType = {
    status: string
}


const ProfileStatus = (props: ProfileStatusType) => {

    let startStatus = props.status
    let [editMode, setEditMode] = useState(false)

    const onClickChangeStatus = () => {
        setEditMode(true)
    }


    return (<div>
            {!editMode &&
            <div>
                <span onClick={onClickChangeStatus}>{startStatus}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={startStatus}/>
            </div>
            }

        </div>
    )
}

export default ProfileStatus;