import React from 'react';

class OnLogout extends React.Component{

    handleLogin = () => {
        this.setState({
            isLoggedIn: false,
        })
    }
    render(){
    return <button onClick={this.handleLogin}>Login</button>
    }
}

export default OnLogout;