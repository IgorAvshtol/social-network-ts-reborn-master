import React, {useState} from 'react'
import s from '././ProfileInfo.module.css';
import {ProfileType, saveProfile, updateAvatar} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/users.jpg";
import {useDispatch} from "react-redux";
import {Form, Formik} from "formik";
import {Field} from "formik";
import ProfileData from "./FormData";


type ProfileInfoComponentType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
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

    const dispatch = useDispatch()

    const isOwner = props.isOwner

    let addPhoto = (e: any) => {
        dispatch(updateAvatar(e.target.files[0]))
    }


    const [editMode, setEditMode] = useState(false)
    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainFoto}/>
            </div>
            {isOwner && <input type={'file'} onChange={addPhoto}/>}
            {editMode ? <ProfileDataForm/> : <ProfileData goToEditMode={() => {
                setEditMode(true)
            }} profile={props.profile} isOwner={isOwner}/>}


            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


        </div>
    )
}

const ProfileDataForm = () => {

    const dispatch = useDispatch()
    const saveProfileData = (profile:any) => {
        dispatch(saveProfile(profile))
    }


    return <div>
        <Formik
            initialValues={{fullName: '', lookingForAJobDescription: '', aboutMe: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                saveProfileData(values)
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <b>Full name</b>: <Field type="fullName" name="fullName"/>
                    </div>
                    <div>
                        <b>lookingForAJobDescription</b>: <Field type="lookingForAJobDescription" name="lookingForAJobDescription"/>
                    </div>
                    <div>
                        <b>aboutMe</b>: <Field type="aboutMe" name="aboutMe"/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}

export const Contact = ({contactTitle, contactValue}: any) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;