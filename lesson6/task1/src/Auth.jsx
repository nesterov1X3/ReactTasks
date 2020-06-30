import React from 'react';
import Greeting from './Greeting.jsx'
import  Login from './Login.jsx'

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
        })
    }
    render() {
        let button;
        if (this.state.isLoggedIn) {
             button = <button onClick={this.handleLogout}>Logout</button>
        } else {
            button = <button onClick={this.handleLogin}>Login</button>
        }
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <div>
                    {button}
                </div>
            </div>
        );
    }
}

export default Auth;
