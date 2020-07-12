import React from 'react';
import UserProfile from './UserProfile.jsx'
import UserMenu from './UserMenu.jsx'

class Page extends React.Component {
    state = {
        userData: null
    }

    componentDidMount() {
        this.fetchUser(this.props.userId)
    }

    fetchUser = userId => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                this.setState({
                    userData
                });
            });
    };
    render() {
        return (
            <div className="page">
                <header className="header">
                    <UserMenu userData={this.state.userData} />
                </header>
                <UserProfile userData={this.state.userData} />
            </div>
        )
    }
}

export default Page;
