import React, {useState, useEffect} from 'react';

const User = ({match}) => {
  const [userData, setUserdata] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error();
    })
    .then(userData => {
        setUserdata(userData)
  })
  }, [match.params.userId])

    // const { userData } = this.state;
    if (!userData) {
        return null;
    }
    const { name, location, avatar_url } = userData;
    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    )
}

export default User;