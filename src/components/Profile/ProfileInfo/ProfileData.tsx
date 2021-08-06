import { Button } from "antd";
import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";


type ProfileDataType = {
    profile: ProfileType
    goToEditMode: () => void
    isOwner: boolean
}

const ProfileData = (props: ProfileDataType) => {
    return <div>
        {props.isOwner && <div>
            <Button onClick={props.goToEditMode}>Edit</Button>
        </div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>lookingForAJobDescription</b>: {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>aboutMe</b>: {props.profile.aboutMe}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map((key) => {*/}
        {/*    return <Contact key={key} contactTitle={key}*/}
        {/*                    contactValue={props.profile.contacts[key as keyof ContactType]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </div>
}

export default ProfileData