import React from 'react'
import User from './Users.jsx'

//algo
// render users
//render users by page
//pagination
//combine
//
//
class UsersList extends React.Component {
  state = {
    currentPage: 0,
    itemsPage: 3
  }


  render() {
    const {users} = this.props;
    const {currentPage, itemsPage} = this.state;

    const startIndex = currentPage * itemsPage;
    const endIndex = startIndex + itemsPage;


    const usersToShow = users.slice(startIndex, endIndex)


    return (
    <div>
  
      <ul className="users">
        {usersToShow.map(user => (
          <User key={Math.random()} name={user.name} age = {user.age}/>
        ))

        }
        
      </ul>
    </div>
    )
  }
}

export  default UsersList;