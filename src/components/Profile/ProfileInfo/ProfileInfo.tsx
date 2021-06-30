import React from 'react'
import s from '././ProfileInfo.module.css';
import {ProfileType, updateAvatar} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/users.jpg";
import {useDispatch} from "react-redux";
import ProfileData from "./FormData";


type ProfileInfoComponentType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}

export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

const ProfileInfo = (props: ProfileInfoComponentType) => {
    // if (!props.profile) {
    //    return <Preloader/>
    // }
    const dispatch = useDispatch()

    let addPhoto = (e: any) => {
        dispatch(updateAvatar(e.target.files[0]))
    }

    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainFoto}/>
            </div>
            <input type={'file'} onChange={addPhoto}/>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <ProfileData profile={props.profile}/>

        </div>
    )
}



export const Contact = ({contactTitle, contactValue}: any) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;