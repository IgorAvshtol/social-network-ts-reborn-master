import React from 'react'
import s from '././ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoComponentType = {
    profile: ProfileType

}


const ProfileInfo = (props: ProfileInfoComponentType) => {
    return (<div>
            <img
                src='https://sun9-74.userapi.com/impf/CfedXY_0pC5iWwNhFedBDHyJk54SvRY9BDBBWg/3tT19xmRo_8.jpg?size=1280x960&quality=96&sign=0fbbf1bcf2ea3c479bfcad8c3ff85128&type=album'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.contacts.twitter}
            </div>
            <ProfileStatus status={'AXAXXAXAXAXA'}/>
        </div>
    )
}

export default ProfileInfo;