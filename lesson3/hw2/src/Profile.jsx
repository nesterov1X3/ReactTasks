import React from 'react';



const Profile = (props) => {

    const birthD = new Date(props.UserData.birthDate).format('DD MMM YY')

    return (
        <>
        <div className="profile__name">{`${props.UserData.firstName} ${props.UserData.lastName}`}</div>
        <div className="profile__birth">{` Was born ${birthD } in ${props.UserData.birthPlace}`}</div>
        </>
    )
}

export default Profile;



