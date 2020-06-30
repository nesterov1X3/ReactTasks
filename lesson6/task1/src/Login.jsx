import React from 'react'


class OnLogin extends React.Component {

    handleLogout = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    render() {
        return <button onClick={this.handleLogout}>Logout</button>
    }
}

export default OnLogin;