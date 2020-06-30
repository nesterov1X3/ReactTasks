import React from 'react';
import Greeting from './Greeting.jsx'
import  OnLogin from './Login.jsx'
import  OnLogout from './Logout.jsx'

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {this.state.isLoggedIn ? 
                    <OnLogin/> 
                : 
                    <OnLogout/>  
            }
                    
            </div>
        );
    }
}

export default Auth;
