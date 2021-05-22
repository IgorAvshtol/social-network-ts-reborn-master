import React from 'react'
import s from '././ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../Common/Preloader";


type ProfileInfoComponentType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}


const ProfileInfo = (props: ProfileInfoComponentType) => {
    // if (!props.profile) {
    //    return <Preloader/>
    // }

    return (<div>
            <img
                src='https://sun9-74.userapi.com/impf/CfedXY_0pC5iWwNhFedBDHyJk54SvRY9BDBBWg/3tT19xmRo_8.jpg?size=1280x960&quality=96&sign=0fbbf1bcf2ea3c479bfcad8c3ff85128&type=album'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.contacts.twitter}
                {props.profile.userId}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;