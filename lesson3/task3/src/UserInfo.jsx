import React from 'react'
import UserAvatar from './UserAvatar'
const UserInfo = (props) =>{
    return (
        <div className="user-info">
        <UserAvatar user={props.user}/>
        <div className="user-info__name">{props.name}</div>
      </div>
    )
}
export default UserInfo;