import React from 'react';



const Profile = (props) => {
    const birth = new Date(props.birthDate).getFullYear().getDays()
    // const age = (new Date().getFullYear() - new Date(props.birthDate).getFullYear());
    return (
        <div className="profile__birth">{`${props.firstName} ${props.lastName}. Was born ${birth} in ${birthPlace}`}</div>
    )
}

export default Profile;



