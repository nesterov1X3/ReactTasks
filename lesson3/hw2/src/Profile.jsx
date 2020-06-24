import React from 'react';
import moment from 'moment';


const birthD = (date) => {
    return moment(new Date(date)).format('DD MMM YY')
 }
const Profile = (props) => {

    return (
        <>
        <div className="profile__name">{`${props.UserData.firstName} ${props.UserData.lastName}`}</div>
        <div className="profile__birth">{` Was born ${birthD(props.UserData.birthDate) } in ${props.UserData.birthPlace}`}</div>
        </>
    )
}

export default Profile;



