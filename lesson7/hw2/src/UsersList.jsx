import React from 'react'
import User from './Users.jsx'
import Pagination from './Pagination.jsx'

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
    itemsPerPage: 3
  }

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })

  }
  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })   

  }


  render() {

    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const usersToShow = users.slice(startIndex, endIndex)


    return (
      <div>
        <Pagination
         goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
        />

        <ul className="users">
          {usersToShow.map(user => (
            <User key={user.id} {...user} />
          ))
          }

        </ul>
      </div >
    )
  }
}

export default UsersList;