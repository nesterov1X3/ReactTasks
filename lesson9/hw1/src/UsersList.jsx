import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterText: "To",
        }
    }

    filterUsers = () => this.props.users.filter((user) =>
      user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
    );

    onChange = (event) => {
        this.setState({
            value: event.target.filterText
        })
    };

    

    render() {
        const { users } = this.props;

        return (
            <>
                <div>{this.filterUsers().map(user => (
                    <User key={user.id} {...user} />
                ))
                }</div>

                <Filter
                    count={this.filterUsers().length}
                    onChange={this.onChange}
                    filterText={this.state.filterText}
                />
            </>
        )
    }
}

export default UsersList