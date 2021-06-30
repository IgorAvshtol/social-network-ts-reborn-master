import React from 'react'
import s from '././ProfileInfo.module.css';
import {ProfileType, updateAvatar} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../Common/Preloader";
import {useDispatch} from "react-redux";


type ProfileInfoComponentType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}


const ProfileInfo = (props: ProfileInfoComponentType) => {
    // if (!props.profile) {
    //    return <Preloader/>
    // }
    const dispatch = useDispatch()

    let addPhoto = (e: any) => {
        dispatch(updateAvatar(e.target.files[0]))
        console.log("fdddf");
    }

    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.contacts.twitter}
                {props.profile.userId}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <input type={'file'} onChange={addPhoto}/>

        </div>
    )
}



export default ProfileInfo;