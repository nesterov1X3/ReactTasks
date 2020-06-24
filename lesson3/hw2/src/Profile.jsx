import React from 'react';
import birthD from './birthDay.jsx'



const Profile = (props) => {

    return (
        <>
        <div className="profile__name">{`${props.UserData.firstName} ${props.UserData.lastName}`}</div>
        <div className="profile__birth">{` Was born ${birthD(props.UserData.birthDate) } in ${props.UserData.birthPlace}`}</div>
        </>
    )
}

export default Profile;



