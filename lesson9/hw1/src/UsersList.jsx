import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            count: null,
            value: null
        }
    }

    onChange = (event) => {
        // event.preventDefault();
        this.setState({
            value:event.target.value
        }) 
    };

    // filterText = (event) => {
    //     this.setState({
    //         filterText: event.target.filterText,
    //     })
    // }

    render() {
        const { users } = this.props;
        return (
            <>
                <div>{users.map(user => (
                    <User key={user.id} {...user} />
                ))
                }</div>

                <Filter
                    count={this.state.count}
                    onChange={this.onChange}
                    filterText={this.state.filterText}
                    value={this.state.value}
                />
            </>
        )
    }
}

export default UsersList