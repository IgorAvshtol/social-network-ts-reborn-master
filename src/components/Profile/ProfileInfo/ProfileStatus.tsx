import React, {ChangeEvent, useEffect, useState} from 'react'


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatus = (props: ProfileStatusType) => {


    let [newstatus, setNewStatus] = useState(props.status)
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

    useEffect(() => {
            setNewStatus(props.status)
            console.log(newstatus)
        }, [props.status]
    )


    return (<div>
            {!editMode &&
            <div>
                <span onClick={onClickChangeStatus}>{props.status || "no status"}</span>
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

function componentDidUpdate() {
    throw new Error('Function not implemented.')
}
