import React from 'react';



const Profile = (props) => {
    const formatter = new Intl.DateTimeFormat('en',{
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour12: false
});
    const birthD = formatter.format(new Date(props.birthDate))
    
    // const age = (new Date().getFullYear() - new Date(props.birthDate).getFullYear());
    return (
        <div className="profile__birth">{`${props.firstName} ${props.lastName}. Was born ${birthD } in ${props.birthPlace}`}</div>
    )
}

export default Profile;



