import React from 'react';
import ShoppingCart from './ShoppingCart.jsx'
import Profile from './Profile.jsx'

class App extends React.Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe',
        },
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,
            },
        });
    }
    render() {
        const {firstName, lastName} = this.state.userData;
        return (
          <div className='page'>
            <h1 className='title'>{`Hello, ${firstName} ${lastName}`}</h1>
            <main className='content'>
              <ShoppingCart userName={this.state.userData.firstName} />
              <Profile userData={this.state.userData} handleChange={this.handleChange} />
            </main>
          </div>
        );
      }
    }
    
    export default App;
